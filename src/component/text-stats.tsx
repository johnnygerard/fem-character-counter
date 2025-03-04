import { getLetterStats } from "@/util/get-letter-stats";
import { memo } from "react";
import { Meter } from "react-aria-components";

type Props = {
  className: string;
  text: string;
};

const TextStats = ({ className, text }: Props) => {
  const stats = getLetterStats(text);

  return (
    <div className={className}>
      <h2 className="tv_medium mb-5">Letter Density</h2>
      {stats.length === 0 ? (
        <p className="tv_small">
          No characters found. Start typing to see letter density.
        </p>
      ) : (
        <ol className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3.5 gap-y-3">
          {stats.map(({ letter, count, percentage }) => {
            const id = `letter-${letter}`;

            return (
              <li className="contents" key={letter}>
                <label id={id} className="w-4">
                  {letter}
                </label>
                <Meter
                  key={letter}
                  aria-labelledby={id}
                  className="tv_small"
                  value={percentage}
                  minValue={0}
                  maxValue={100}
                >
                  <div className="h-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <div
                      className="h-full rounded-full bg-purple-400"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </Meter>
                <span className="text-end">{`${count} (${percentage.toFixed(2)}%)`}</span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default memo(TextStats);
