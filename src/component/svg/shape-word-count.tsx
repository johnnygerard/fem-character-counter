import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export const ShapeWordCount = memo((props: Props) => {
  return (
    <svg viewBox="0 0 150 150" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.62939e-06H50V50H0V7.62939e-06ZM99.9997 50H50V99.9997H0V150H50V99.9997H99.9997V150H150V99.9997H99.9997V50ZM99.9997 50H150V7.62939e-06H99.9997V50Z"
        className="fill-yellow-400"
      />
    </svg>
  );
});

ShapeWordCount.displayName = "ShapeWordCount";
