"use client";
import { cn } from "@/util/cn";
import { Dispatch, memo, SetStateAction } from "react";
import { TextArea, TextField } from "react-aria-components";

type Props = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const AppTextarea = ({ text, setText }: Props) => {
  return (
    <TextField
      aria-label="Text to analyze"
      defaultValue={text}
      onChange={setText}
    >
      <TextArea
        placeholder="Start typing here… (or paste your text)"
        className={cn(
          "block h-50 w-full resize-none rounded-12 border-2",
          "mt-10 p-3 tb:p-5 dt:mt-12",
          "border-neutral-200 data-[focused]:!border-purple-500 dark:border-neutral-700",
          "data-[hovered]:dark:border-neutral-600",
          "bg-neutral-100 dark:bg-neutral-800",
          "data-[hovered]:bg-neutral-200 data-[hovered]:dark:bg-neutral-700",
          "text-neutral-700 dark:text-neutral-200",
          // Use of `placeholder-current` is avoided because it does not always
          // react to theme changes.
          "placeholder-neutral-700/50 dark:placeholder-neutral-200/50",
          "shadow-purple-400 data-[focused]:shadow-[0_0_10px]",
        )}
      />
    </TextField>
  );
};

export default memo(AppTextarea);
