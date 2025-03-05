"use client";
import AppCheckbox from "@/component/app-checkbox";
import AppTextarea from "@/component/app-textarea";
import ReadingTime from "@/component/reading-time";
import TextCounters from "@/component/text-counters";
import TextStats from "@/component/text-stats";
import { countWords } from "@/util/count-words";
import { memo, useState } from "react";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const wordCount = countWords(text);

  return (
    <>
      <AppTextarea text={text} setText={setText} />
      <div className="mt-4 flex gap-3 max-tb:flex-col tb:gap-6">
        <AppCheckbox>Exclude Spaces</AppCheckbox>
        <AppCheckbox>Set Character Limit</AppCheckbox>
        <ReadingTime className="tb:ms-auto" wordCount={wordCount} />
      </div>
      <TextCounters
        className="mt-10 dt:mt-12"
        text={text}
        wordCount={wordCount}
      />
      <TextStats className="mt-6" text={text} />
    </>
  );
};

export default memo(TextAnalyzer);
