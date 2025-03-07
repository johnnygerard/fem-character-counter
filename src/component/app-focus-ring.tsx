import { cn } from "@/util/cn";
import { memo } from "react";
import { FocusRing, FocusRingProps } from "react-aria";

export const AppFocusRing = memo((props: FocusRingProps) => {
  return (
    <FocusRing
      focusRingClass={cn(
        "animate-focus-ring outline-2 outline-offset-2 outline-purple-400",
      )}
      {...props}
    />
  );
});

AppFocusRing.displayName = "AppFocusRing";
