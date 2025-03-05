import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

const IconSun = (props: Props) => {
  return (
    <svg viewBox="0 0 22 22" fill="none" {...props}>
      <path
        d="M11.0007 1.83334V3.66667M11.0007 18.3333V20.1667M3.66732 11H1.83398M5.78859 5.78794L4.49223 4.49158M16.2127 5.78794L17.5091 4.49158M5.78859 16.2158L4.49223 17.5122M16.2127 16.2158L17.5091 17.5122M20.1673 11H18.334M15.584 11C15.584 13.5313 13.532 15.5833 11.0007 15.5833C8.46935 15.5833 6.41732 13.5313 6.41732 11C6.41732 8.4687 8.46935 6.41667 11.0007 6.41667C13.532 6.41667 15.584 8.4687 15.584 11Z"
        className="stroke-neutral-0"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(IconSun);
