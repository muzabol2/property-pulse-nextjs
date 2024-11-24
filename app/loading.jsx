"use client";

import { Spinner } from "@/components/Spinner";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow pt-20 pb-20">
      <Spinner />
    </div>
  );
};

export default LoadingPage;
