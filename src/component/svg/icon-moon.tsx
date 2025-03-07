import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export const IconMoon = memo((props: Props) => {
  return (
    <svg viewBox="0 0 22 22" fill="none" {...props}>
      <path
        d="M20.1259 11.8769C18.8638 14.0909 16.4815 15.5836 13.7507 15.5836C9.70056 15.5836 6.41732 12.3004 6.41732 8.25031C6.41732 5.51922 7.91027 3.13683 10.1246 1.87474C5.47292 2.31579 1.83398 6.23298 1.83398 11.0001C1.83398 16.0627 5.93804 20.1668 11.0007 20.1668C15.7675 20.1668 19.6845 16.5282 20.1259 11.8769Z"
        className="stroke-neutral-900"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

IconMoon.displayName = "IconMoon";
