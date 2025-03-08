"use server";
import { THEME_KEY } from "@/constants";
import { type Theme, THEME } from "@/type/theme";
import { cookies } from "next/headers";

export const loadTheme = async (): Promise<Theme> => {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_KEY)?.value;

  return theme === THEME.DARK || theme === THEME.LIGHT ? theme : THEME.SYSTEM;
};
