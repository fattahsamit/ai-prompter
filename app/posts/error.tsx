"use client";
// Error components must be client components
import { useEffect } from "react";

interface errorProp {
  error: any;
  reset: any;
}

const Error = ({ error, reset }: errorProp) => {
  useEffect(() => {
    // Log the error to a error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Somethingaefeaae went wrong</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
