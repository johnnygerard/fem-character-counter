"use client";
import { AppFocusRing } from "@/component/app-focus-ring";
import { memo } from "react";
import { Link, LinkProps } from "react-aria-components";

export const AppLink = memo((props: LinkProps) => {
  return (
    <AppFocusRing>
      <Link {...props} />
    </AppFocusRing>
  );
});

AppLink.displayName = "AppLink";
