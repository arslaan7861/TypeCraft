import React, { useEffect, useState } from "react";
import { ResultType } from "../App";
import Results from "./Results";
type Timerproptype = {
  typingStrt: boolean;
  setTyping: React.Dispatch<React.SetStateAction<boolean>>;
  results: ResultType;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
};

const Timer = ({
  typingStrt,
  setTyping,
  results,
  setResults,
}: Timerproptype) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // setTime(time + 1);

      setResults({ ...results, Time: results.Time + 1 });
    }, 1000);
    if (!typingStrt || results.show) clearInterval(timer);
    return () => clearInterval(timer);
  });
  // useEffect(() => {
  //   if (results.show === true) setResults({ ...results, Time: time });
  // }, [results]);
  return (
    <span className="absolute text-sm font-light  right-4">
      {results.Time} secs
    </span>
  );
};

export default Timer;
