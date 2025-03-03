import Logomark from "@/component/svg/logomark";
import { memo } from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.25 tb:gap-3">
      <Logomark
        aria-hidden="true"
        className="h-7.5 fill-purple-400 tb:h-10 dark:fill-purple-500"
      />
      <span className="tv_medium max-tb:text-[1.125rem] max-tb:-tracking-[0.04688rem]">
        Character Counter
      </span>
    </div>
  );
};

export default memo(Logo);
