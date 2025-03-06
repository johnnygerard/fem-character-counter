import TextAnalyzer from "@/component/text-analyzer/text-analyzer";
import { cn } from "@/util/cn";
import { memo } from "react";

const HomePage = () => {
  return (
    <>
      <h1
        className={cn(
          "tv_display mt-14 dark:text-neutral-100",
          "text-center whitespace-pre-line",
        )}
      >
        Analyze your text{"\n"}in real&#x2011;time.
      </h1>
      <TextAnalyzer />
    </>
  );
};

export default memo(HomePage);
