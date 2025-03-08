import { Theme } from "@/type/theme";
import { createContext } from "react";

export const ThemeContext = createContext<
  | {
      theme: Theme;
      setTheme: (theme: Theme) => void;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);
