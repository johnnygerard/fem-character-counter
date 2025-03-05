import Logo from "@/component/logo";
import ThemeToggle from "@/component/theme-toggle";
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
