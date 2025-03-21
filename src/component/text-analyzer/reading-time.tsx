import { cn } from "@/util/cn";
import { getReadingTime } from "@/util/get-reading-time";
import { memo } from "react";

type Props = {
  className: string;
  wordCount: number;
};

export const ReadingTime = memo(({ className, wordCount }: Props) => {
  return (
    <p className={cn("tv_small", className)}>
      Approx. reading time: {getReadingTime(wordCount)}
    </p>
  );
});

ReadingTime.displayName = "ReadingTime";
