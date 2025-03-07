import { Logomark } from "@/component/svg/logomark";
import { memo } from "react";

export const Logo = memo(() => {
  return (
    <div className="flex items-center gap-2.25 tb:gap-3">
      <Logomark
        aria-hidden
        className="h-7.5 fill-purple-400 tb:h-10 dark:fill-purple-500"
      />
      <span className="tv_medium max-tb:text-[1.125rem] max-tb:-tracking-[0.04688rem]">
        Character Counter
      </span>
    </div>
  );
});

Logo.displayName = "Logo";
