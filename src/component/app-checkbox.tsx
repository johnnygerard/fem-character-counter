"use client";
import { cn } from "@/util/cn";
import { memo } from "react";
import { Checkbox, CheckboxProps } from "react-aria-components";

const AppCheckbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <Checkbox {...props}>
      {({ isHovered, isFocusVisible, isSelected }) => (
        <div className={cn("flex cursor-pointer items-center gap-2.5")}>
          <div
            aria-hidden="true"
            className={cn(
              "grid h-4 w-4 place-items-center rounded-4",
              isFocusVisible &&
                "shadow-[0_0_0_2px_var(--color-neutral-0),0_0_0_4px_var(--color-purple-400)]",
              isSelected && (isHovered ? "bg-purple-500" : "bg-purple-400"),
              !isSelected && [
                "border border-neutral-900 dark:border-neutral-200",
                isHovered && "border-neutral-600 dark:border-neutral-0",
                isFocusVisible && "border-neutral-200 bg-neutral-0",
              ],
            )}
          >
            {isSelected && (
              <svg
                className="h-3 w-3 stroke-neutral-900"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M10 3L4.5 8.5L2 6"
                  strokeWidth="1.6666"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span className="tv_small">
            <>{children}</>
          </span>
        </div>
      )}
    </Checkbox>
  );
};

export default memo(AppCheckbox);
