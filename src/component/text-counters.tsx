import ShapeCharacterCount from "@/component/svg/shape-character-count";
import ShapeSentenceCount from "@/component/svg/shape-sentence-count";
import ShapeWordCount from "@/component/svg/shape-word-count";
import { cn } from "@/util/cn";
import { countCharacters } from "@/util/count-characters";
import { countSentences } from "@/util/count-sentences";
import { countWords } from "@/util/count-words";
import { memo } from "react";

type Props = {
  className: string;
  text: string;
};

const TextCounters = ({ className, text }: Props) => {
  const counters = [
    {
      count: countCharacters(text),
      name: "Total Characters",
      Shape: ShapeCharacterCount,
    },
    {
      count: countWords(text),
      name: "Word Count",
      Shape: ShapeWordCount,
    },
    {
      count: countSentences(text),
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
          <span className="tv_display">
            {count.toString(10).padStart(2, "0")}
          </span>
          {name}
          <Shape
            aria-hidden
            className={cn(
              "-right-[3.15625rem] tb:-right-[4.40625rem] dt:-right-[1.88544rem]",
              "absolute h-37.5 w-37.5",
            )}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(TextCounters);
