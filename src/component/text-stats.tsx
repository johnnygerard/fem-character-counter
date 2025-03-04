import AppFocusRing from "@/component/app-focus-ring";
import IconChevron from "@/component/svg/icon-chevron";
import { getLetterStats } from "@/util/get-letter-stats";
import { memo, useState } from "react";
import { Meter, ToggleButton } from "react-aria-components";

const COLLAPSED_LENGTH = 5;

type Props = {
  className: string;
  text: string;
};

const TextStats = ({ className, text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const stats = getLetterStats(text);
  const visibleStats = expanded ? stats : stats.slice(0, COLLAPSED_LENGTH);

  return (
    <section className={className}>
      <h2 className="tv_medium mb-5">Letter Density</h2>
      {stats.length === 0 ? (
        <p className="tv_small">
          No characters found. Start typing to see letter density.
        </p>
      ) : (
        <>
          <ol className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3.5 gap-y-3">
            {visibleStats.map(({ letter, count, percentage }) => {
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
          {stats.length > COLLAPSED_LENGTH && (
            <AppFocusRing>
              <ToggleButton
                className="mt-5 flex items-center gap-2 rounded-8"
                onChange={setExpanded}
              >
                {`See ${expanded ? "less" : "more"}`}
                <IconChevron
                  aria-hidden
                  direction={expanded ? "up" : "down"}
                  className="h-1.75 w-3"
                />
              </ToggleButton>
            </AppFocusRing>
          )}
        </>
      )}
    </section>
  );
};

export default memo(TextStats);
