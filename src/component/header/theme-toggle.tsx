"use client";
import { AppFocusRing } from "@/component/app-focus-ring";
import { IconMoon } from "@/component/svg/icon-moon";
import { IconSun } from "@/component/svg/icon-sun";
import { cn } from "@/util/cn";
import { useThemeContext } from "next-theme-provider";
import { memo } from "react";
import { ToggleButton } from "react-aria-components";

export const ThemeToggle = memo(() => {
  const { toggleTheme } = useThemeContext();

  return (
    <AppFocusRing>
      <ToggleButton
        aria-label="Dark theme"
        className={cn(
          "grid place-items-center bg-neutral-100 dark:bg-neutral-700",
          "size-8 rounded-6 tb:h-11 tb:w-11 tb:rounded-8",
        )}
        onChange={toggleTheme}
      >
        {[IconSun, IconMoon].map((Icon, index) => {
          const isSun = index === 0;

          return (
            <Icon
              key={index}
              aria-hidden
              className={cn(
                "size-5 animate-fade-in tb:h-1/2 tb:w-1/2",
                isSun ? "hidden dark:block" : "dark:hidden",
              )}
            />
          );
        })}
      </ToggleButton>
    </AppFocusRing>
  );
});

ThemeToggle.displayName = "ThemeToggle";
