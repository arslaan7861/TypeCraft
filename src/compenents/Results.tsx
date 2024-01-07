import React, { useEffect } from "react";
import { ResultType } from "../App";
type ResultsPropsType = {
  reset: () => void;
  results: ResultType;
};

function Results({ reset, results }: ResultsPropsType) {
  let speed =
    results.Time === 0
      ? results.words * 60
      : (results.words / results.Time) * 60;
  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") reset();
    });
    return () => document.removeEventListener("keypress", () => {});
  });
  return (
    <div className="h-screen w-screen absolute z-50  top-0 left-0 backdrop-blur-md flex items-center justify-center">
      <article className="w-11/12 md:w-3/5 aspect-square sm:aspect-video flex flex-col gap-5 p-5 text-lg capitalize text-white border justify-evenly relative ">
        <button
          onClick={reset}
          className="font-mono uppercase text-2xl absolute top-1 right-2 p-2"
        >
          x
        </button>
        <h1 className="w-full text-center uppercase text-xl font-extrabold tracking-widest">
          results
        </h1>
        <h2 className="flex px-2 justify-between items-center">
          speed:<p>{Math.round(speed)}wpm</p>
        </h2>
        <h2 className="flex px-2 justify-between items-center">
          Errors:<p>{results.errors}</p>
        </h2>
        <h2 className="flex px-2 justify-between items-center">
          Words typed:<p>{Math.round(results.words)}</p>
        </h2>
        <h2 className="flex px-2 justify-between items-center">
          Level:<p>{results.level}</p>
        </h2>
      </article>
    </div>
  );
}

export default Results;
