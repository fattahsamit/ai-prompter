"use client";
// Error components must be client components
import { useEffect } from "react";

interface errorProp {
  error: any;
  reset: any;
}

const error = ({ error, reset }: errorProp) => {
  useEffect(() => {
    // Log the error to a error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default error;
