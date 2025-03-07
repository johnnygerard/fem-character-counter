import { cn } from "@/util/cn";
import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement> & {
  direction: "up" | "down";
};

export const IconChevron = memo(({ className, direction, ...props }: Props) => {
  return (
    <svg
      className={cn(
        "transition-[rotate]",
        direction === "up" && "rotate-180",
        className,
      )}
      viewBox="0 0 12 7"
      fill="none"
      {...props}
    >
      <path
        d="M5.71875 6.375L1.09375 1.78125C0.9375 1.65625 0.9375 1.40625 1.09375 1.25L1.71875 0.65625C1.875 0.5 2.09375 0.5 2.25 0.65625L6 4.34375L9.71875 0.65625C9.875 0.5 10.125 0.5 10.25 0.65625L10.875 1.25C11.0312 1.40625 11.0312 1.65625 10.875 1.78125L6.25 6.375C6.09375 6.53125 5.875 6.53125 5.71875 6.375Z"
        fill="currentColor"
      />
    </svg>
  );
});

IconChevron.displayName = "IconChevron";
