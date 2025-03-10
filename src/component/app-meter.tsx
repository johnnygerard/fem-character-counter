import { memo } from "react";
import { Meter, type MeterProps } from "react-aria-components";

type Props = MeterProps & {
  percentage: number;
};

export const AppMeter = memo(({ percentage, ...props }: Props) => {
  return (
    <Meter minValue={0} maxValue={100} value={percentage} {...props}>
      {/* Meter track */}
      <div className="h-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
        {/* Meter fill */}
        <div
          className="h-full rounded-full bg-purple-400 transition-[width]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </Meter>
  );
});

AppMeter.displayName = "AppMeter";
