import React from "react";
import Char from "./Char";
import { ResultType, typingLevels } from "../App";
import Timer from "./Timer";
const audio = new Audio("wrongpress.mp3");
type TypingAreaProps = {
  level: number;
  typedText: string;
  setTypedtext: React.Dispatch<React.SetStateAction<string>>;
  setTyping: React.Dispatch<React.SetStateAction<boolean>>;
  typing: boolean;
  time: React.MutableRefObject<number>;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
  results: ResultType;
};

function TypingArea({
  level,
  typedText,
  setTypedtext,
  typing,
  setTyping,
  setResults,
  results,
  time,
}: TypingAreaProps) {
  //*handle typing
  const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const wrong: boolean =
      typingLevels[level][e.target.value.length - 1] !==
      e.target.value[e.target.value.length - 1];
    if (!wrong) return setTypedtext(e.target.value);
    if (!typing) return;
    setResults({ ...results, errors: results.errors + 1 });
    audio.play();
  };
  return (
    <div className="w-11/12 md:w-3/5 pb-5 aspect-square sm:aspect-video bg-bgSecondary shadow-3d rounded-3xl flex items-center justify-center flex-col ">
      <textarea
        // type=""
        value={typedText}
        onChange={handleChange}
        className="h-0 w-0 absolute top-1/2"
        id="inp"
        onFocus={() => setTyping(true)}
      />
      <label
        htmlFor="inp"
        className="flex w-full flex-col justify-between py-5 h-full"
      >
        <h1 className="text-2xl w-full relative text-white text-center font-bold tracking-widest">
          Level {level + 1}
          {typing && (
            <Timer
              results={results}
              setResults={setResults}
              typingStrt={typing}
              setTyping={setTyping}
            />
          )}
          <p className="text-sm font-light text-gray-400 uppercase">
            CLick on text to start typing
          </p>
        </h1>
        <section className="flex flex-grow  flex-wrap gap-1 p-4 items-center justify-center">
          {typingLevels[level].split("").map((ch, index) => (
            <Char
              key={index}
              ch={ch}
              typedText={typedText}
              level={level}
              index={index}
            />
          ))}
        </section>
      </label>
      <button
        onClick={() => {
          setTypedtext("");
          setTyping(false);
          setResults({
            show: false,
            Time: 0,
            words: 0,
            level: 1,
            errors: 0,
          });
        }}
        className="bg-red-600 px-4 py2 rounded-full uppercase font-semibold text-white shadow-3d text-lg tracking-widest"
      >
        reset
      </button>
    </div>
  );
}

export default TypingArea;
