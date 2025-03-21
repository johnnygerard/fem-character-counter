import { Header } from "@/component/header/header";
import { Noscript } from "@/component/noscript";
import { AppRouterProvider } from "@/component/provider/app-router-provider";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { loadTheme, ThemeProvider } from "next-theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { memo, type ReactNode } from "react";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const APP_NAME = "Character counter";
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://fem-character-counter-jgerard.vercel.app/"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/asset/image/favicon-light.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/asset/image/favicon-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const theme = await loadTheme();

  return (
    <html className={cn(dmSans.variable)} data-theme={theme} lang="en-US">
      <body
        className={cn(
          "font-sans font-normal not-italic antialiased",
          "text-[1.25rem]/[1.4] -tracking-[0.0375rem]",
          "text-neutral-900 dark:text-neutral-200",
          "bg-neutral-0 dark:bg-neutral-900",
          "flex justify-center p-4 tb:px-8 dt:py-8",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "fixed top-0 left-0 -z-10 h-screen w-screen opacity-50",
            "bg-[url(/asset/image/light-noise.png)]",
            "dark:bg-[url(/asset/image/dark-noise.png)]",
          )}
        />
        <AppRouterProvider>
          <ThemeProvider initialTheme={theme}>
            <div className="w-full max-w-248 dt:w-248">
              <Header />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </AppRouterProvider>
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
