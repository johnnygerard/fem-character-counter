"use client";
import { THEME_KEY } from "@/constants";
import { ThemeContext } from "@/context/theme-context";
import { Theme, THEME } from "@/type/theme";
import { memo, ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  initialTheme: Theme;
};

export const ThemeProvider = memo(({ children, initialTheme }: Props) => {
  const [theme, setTheme] = useState(initialTheme);

  // Listen for theme change from other tabs
  useEffect(() => {
    if (window.BroadcastChannel === undefined) return;
    const channel = new BroadcastChannel(THEME_KEY);

    channel.onmessage = ({ data }: MessageEvent<Theme>) => {
      setTheme(data);
    };

    return () => {
      channel.close();
    };
  }, []);

  // Synchronize theme with CSS
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (theme: Theme): void => {
    setTheme(theme);

    // Persist theme with a cookie
    document.cookie = [
      `${THEME_KEY}=${theme}`,
      `max-age=${365 * 24 * 60 * 60}`, // 1 year
      "secure",
      "path=/",
      "samesite=lax",
    ].join("; ");

    // Broadcast theme change to other tabs
    if (window.BroadcastChannel) {
      const channel = new BroadcastChannel(THEME_KEY);

      channel.postMessage(theme);
      channel.close();
    }
  };

  const toggleTheme = (): void => {
    const isDark =
      (theme === THEME.SYSTEM &&
        matchMedia("(prefers-color-scheme: dark)").matches) ||
      theme === THEME.DARK;

    handleThemeChange(isDark ? THEME.LIGHT : THEME.DARK);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: handleThemeChange, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
});

ThemeProvider.displayName = "ThemeProvider";
