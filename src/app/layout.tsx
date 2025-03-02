import AppRouterProvider from "@/component/app-router-provider";
import Noscript from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const APP_NAME = "placeholder";
const DESCRIPTION = "placeholder";

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
    <html
      className={cn(geistSans.variable, "font-sans antialiased")}
      lang="en-US"
    >
      <body>
        <AppRouterProvider>{children}</AppRouterProvider>
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
