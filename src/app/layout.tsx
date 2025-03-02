import AppRouterProvider from "@/component/app-router-provider";
import Noscript from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const APP_NAME = "Character counter";
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com/placeholder"),
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
      url: "/asset/image/favicon.png",
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

const RootLayout = ({ children }: Props) => {
  return (
    <html className={cn(dmSans.variable)} lang="en-US">
      <body
        className={cn(
          "font-sans font-normal not-italic antialiased",
          "text-[1.25rem]/[1.4] -tracking-[0.0375rem]",
          "text-neutral-900 dark:text-neutral-200",
          "bg-neutral-0 dark:bg-neutral-900",
        )}
      >
        <AppRouterProvider>{children}</AppRouterProvider>
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
