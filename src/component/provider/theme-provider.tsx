"use client";
import { THEME_KEY } from "@/constants";
import { ThemeContext } from "@/context/theme-context";
import { THEME } from "@/type/theme";
import { memo, ReactNode, useEffect, useState } from "react";

type Props = Readonly<{
  children: ReactNode;
  initialTheme: THEME;
}>;

const ThemeProvider = ({ children, initialTheme }: Props) => {
  const [theme, setTheme] = useState(initialTheme);

  // Synchronize theme across tabs
  useEffect(() => {
    if (window.BroadcastChannel === undefined) return;
    const channel = new BroadcastChannel(THEME_KEY);

    channel.onmessage = ({ data }: MessageEvent<THEME>) => {
      setTheme(data);
    };

    return () => {
      channel.close();
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (theme: THEME): void => {
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
