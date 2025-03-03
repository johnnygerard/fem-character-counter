"use client";
import { cn } from "@/util/cn";
import { memo } from "react";
import { TextArea, TextField } from "react-aria-components";

const AppTextarea = () => {
  return (
    <TextField aria-label="Text to analyze">
      <TextArea
        placeholder="Start typing here… (or paste your text)"
        className={cn(
          "mt-10 h-50 w-full resize-none rounded-12 border-2 p-3 tb:p-5 dt:mt-12",
          "border-neutral-200 data-[focused]:!border-purple-500 dark:border-neutral-700",
          "data-[hovered]:dark:border-neutral-600",
          "bg-neutral-100 dark:bg-neutral-800",
          "data-[hovered]:bg-neutral-200 data-[hovered]:dark:bg-neutral-700",
          "text-neutral-700 dark:text-neutral-200",
          "shadow-purple-400 data-[focused]:shadow-[0_0_10px]",
        )}
      />
    </TextField>
  );
};

export default memo(AppTextarea);
