"use client";
import AppTextarea from "@/component/app-textarea";
import TextCounters from "@/component/text-counters";
import { memo, useState } from "react";

const TextAnalyzer = () => {
  const [text, setText] = useState("");

  return (
    <>
      <AppTextarea text={text} setText={setText} />
      <TextCounters className="mt-10 dt:mt-12" text={text} />
    </>
  );
};

export default memo(TextAnalyzer);
