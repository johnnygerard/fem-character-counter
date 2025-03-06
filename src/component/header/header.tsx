import Logo from "@/component/header/logo";
import ThemeToggle from "@/component/header/theme-toggle";
import { memo } from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <ThemeToggle />
    </header>
  );
};

export default memo(Header);
