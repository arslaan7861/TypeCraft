import React, { useState } from "react";
import Char from "./Char";
import { typingLevels } from "../App";
type TypingAreaProps = {
  level: number;
  typedText: string;
  setTypedtext: React.Dispatch<React.SetStateAction<string>>;
};

function TypingArea({ level, typedText, setTypedtext }: TypingAreaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypedtext(e.target.value);
  };
  return (
    <div className="w-11/12 md:w-3/5 aspect-square sm:aspect-video bg-bgSecondary shadow-3d rounded-3xl flex items-center justify-evenly flex-col ">
      <textarea
        // type=""
        value={typedText}
        onChange={handleChange}
        className="h-0 w-0 absolute top-1/2"
        id="inp"
      />
      <h1 className="text-2xl text-white text-center font-bold tracking-widest">
        Level {level + 1}
      </h1>
      <label htmlFor="inp">
        <section className="flex  flex-wrap gap-1 p-4 items-center justify-center">
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
        onClick={() => setTypedtext("")}
        className="bg-primary px-4 py2 rounded-full uppercase font-semibold text-white shadow-3d text-lg tracking-widest"
      >
        reset
      </button>
    </div>
  );
}

export default TypingArea;
