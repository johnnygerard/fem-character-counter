import AppLink from "@/component/app-link";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="mt-8 text-center">
      <h1 className="tv_medium">404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <AppLink className="mt-6 block" href="/">
        Back to Home
      </AppLink>
    </div>
  );
};

export default memo(NotFound);
