"use client";
import AppTextarea from "@/component/app-textarea";
import { memo, useState } from "react";

const TextAnalyzer = () => {
  const [text, setText] = useState("");

  return <AppTextarea text={text} setText={setText} />;
};

export default memo(TextAnalyzer);
