import { Logo } from "@/component/header/logo";
import { ThemeToggle } from "@/component/header/theme-toggle";
import { memo } from "react";

export const Header = memo(() => {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <ThemeToggle />
    </header>
  );
});

Header.displayName = "Header";
