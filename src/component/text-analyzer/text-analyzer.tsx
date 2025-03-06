"use client";
import AppCheckbox from "@/component/app-checkbox";
import AppTextarea from "@/component/text-analyzer/app-textarea";
import ReadingTime from "@/component/text-analyzer/reading-time";
import TextCounters from "@/component/text-analyzer/text-counters";
import TextStats from "@/component/text-analyzer/text-stats";
import { cn } from "@/util/cn";
import { countCharacters } from "@/util/count-characters";
import { countSentences } from "@/util/count-sentences";
import { countWords } from "@/util/count-words";
import { memo, useState } from "react";
import { Input, NumberField } from "react-aria-components";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(100);
  const [hasCharacterLimit, setHasCharacterLimit] = useState(false);
  const normalizedText = text.normalize("NFD");
  const characterCount = countCharacters(normalizedText, excludeSpaces);
  const wordCount = countWords(normalizedText);
  const sentenceCount = countSentences(normalizedText);

  return (
    <>
      <AppTextarea
        characterCount={characterCount}
        characterLimit={characterLimit}
        hasCharacterLimit={hasCharacterLimit}
        text={normalizedText}
        setText={setText}
      />
      <div className="mt-4 flex gap-3 max-tb:flex-col tb:items-center tb:gap-6">
        <AppCheckbox isSelected={excludeSpaces} onChange={setExcludeSpaces}>
          Exclude Spaces
        </AppCheckbox>
        <div className="flex items-center">
          <AppCheckbox onChange={setHasCharacterLimit}>
            Set Character Limit
          </AppCheckbox>
          {hasCharacterLimit && (
            <NumberField
              className="ms-2.5"
              aria-label="Character Limit"
              minValue={0}
              value={characterLimit}
              onChange={setCharacterLimit}
            >
              <Input
                className={cn(
                  "tv_small w-16 rounded-6 border px-3 py-1",
                  "border-neutral-600 dark:text-neutral-0",
                )}
              />
            </NumberField>
          )}
        </div>
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
