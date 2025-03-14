import { ShapeCharacterCount } from "@/component/svg/shape-character-count";
import { ShapeSentenceCount } from "@/component/svg/shape-sentence-count";
import { ShapeWordCount } from "@/component/svg/shape-word-count";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className: string;
  excludeSpaces: boolean;
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
};

export const TextCounters = memo(
  ({
    className,
    excludeSpaces,
    characterCount,
    wordCount,
    sentenceCount,
  }: Props) => {
    const counters = [
      {
        count: characterCount,
        name: excludeSpaces
          ? "Total Characters (no space)"
          : "Total Characters",
        Shape: ShapeCharacterCount,
      },
      {
        count: wordCount,
        name: "Word Count",
        Shape: ShapeWordCount,
      },
      {
        count: sentenceCount,
        name: "Sentence Count",
        Shape: ShapeSentenceCount,
      },
    ];

    return (
      <ul className={cn("flex flex-col gap-4 tb:flex-row", className)}>
        {counters.map(({ count, name, Shape }, index) => (
          <li
            key={name}
            className={cn(
              ["bg-purple-400", "bg-yellow-500", "bg-orange-500"][index],
              "h-32.5 rounded-12 tb:h-37.5 tb:flex-1",
              "p-5 tb:px-3 tb:py-4 dt:px-4",
              "flex flex-col justify-center gap-2 dt:gap-1.25",
              "relative overflow-hidden text-neutral-900",
            )}
          >
            <span className="tv_display z-10">
              {count.toString(10).padStart(2, "0")}
            </span>
            <span className="z-10 overflow-hidden text-nowrap text-ellipsis">
              {name}
            </span>
            <Shape
              aria-hidden
              className={cn(
                "-right-[3.15625rem] tb:-right-[4.40625rem] dt:-right-[1.88544rem]",
                "absolute size-37.5",
              )}
            />
          </li>
        ))}
      </ul>
    );
  },
);

TextCounters.displayName = "TextCounters";
