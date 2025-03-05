"use client";
import IconInfoCircle from "@/component/svg/icon-info-circle";
import { cn } from "@/util/cn";
import { Dispatch, memo, SetStateAction } from "react";
import { FieldError, TextArea, TextField } from "react-aria-components";

type Props = {
  characterLimit: number | null;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const AppTextarea = ({ characterLimit, text, setText }: Props) => {
  return (
    <TextField
      aria-label="Text to analyze"
      defaultValue={text}
      onChange={setText}
      isInvalid={characterLimit !== null && text.length > characterLimit}
    >
      <TextArea
        placeholder="Start typing here… (or paste your text)"
        className={({ isFocused, isHovered, isInvalid }) => {
          if (isFocused) isHovered = false;

          return cn(
            "block h-50 w-full resize-none rounded-12 border-2",
            "mt-10 p-3 tb:p-5 dt:mt-12",
            "text-neutral-700 dark:text-neutral-200",
            // Use of `placeholder-current` is avoided because it does not always
            // react to theme changes.
            "placeholder-neutral-700/50 dark:placeholder-neutral-200/50",
            isHovered
              ? "bg-neutral-200 dark:bg-neutral-700"
              : "bg-neutral-100 dark:bg-neutral-800",
            isInvalid
              ? "border-orange-800 dark:border-orange-500"
              : isFocused
                ? "border-purple-500"
                : isHovered
                  ? "border-neutral-200 dark:border-neutral-600"
                  : "border-neutral-200 dark:border-neutral-700",
            isFocused &&
              (isInvalid
                ? "shadow-[0_0_8px] shadow-orange-800 dark:shadow-orange-500"
                : "shadow-[0_0_10px] shadow-purple-400"),
          );
        }}
      />
      <FieldError
        className={cn(
          "tv_small mt-3 flex items-center gap-2",
          "text-orange-800 dark:text-orange-500",
        )}
      >
        <IconInfoCircle className="h-3.75 w-3.5" />
        Limit reached! Your text exceeds {characterLimit} characters.
      </FieldError>
    </TextField>
  );
};

export default memo(AppTextarea);
