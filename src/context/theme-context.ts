import { THEME } from "@/type/theme";
import { createContext } from "react";

export const ThemeContext = createContext<
  | {
      theme: THEME;
      setTheme: (theme: THEME) => void;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);
