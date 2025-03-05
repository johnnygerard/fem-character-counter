"use client";
import AppCheckbox from "@/component/app-checkbox";
import AppTextarea from "@/component/app-textarea";
import ReadingTime from "@/component/reading-time";
import TextCounters from "@/component/text-counters";
import TextStats from "@/component/text-stats";
import { countCharacters } from "@/util/count-characters";
import { countSentences } from "@/util/count-sentences";
import { countWords } from "@/util/count-words";
import { memo, useState } from "react";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const normalizedText = text.normalize("NFD");
  const characterCount = countCharacters(normalizedText, excludeSpaces);
  const wordCount = countWords(normalizedText);
  const sentenceCount = countSentences(normalizedText);

  return (
    <>
      <AppTextarea text={normalizedText} setText={setText} />
      <div className="mt-4 flex gap-3 max-tb:flex-col tb:gap-6">
        <AppCheckbox isSelected={excludeSpaces} onChange={setExcludeSpaces}>
          Exclude Spaces
        </AppCheckbox>
        <AppCheckbox>Set Character Limit</AppCheckbox>
        <ReadingTime className="tb:ms-auto" wordCount={wordCount} />
      </div>
      <TextCounters
        className="mt-10 dt:mt-12"
        excludeSpaces={excludeSpaces}
        characterCount={characterCount}
        wordCount={wordCount}
        sentenceCount={sentenceCount}
      />
      <TextStats className="mt-6" text={normalizedText} />
    </>
  );
};

export default memo(TextAnalyzer);
