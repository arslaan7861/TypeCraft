import React, { useState } from "react";
import Char from "./Char";
import { testString } from "../App";

function TypingArea() {
  const [typedText, setTypedtext] = useState<string>("");
  return (
    <div className="h-1/2  aspect-video bg-bgSecondary shadow-3d rounded-3xl flex items-center justify-center">
      <input
        type="text"
        value={typedText}
        onChange={(e) => setTypedtext(e.target.value)}
        className="h-0 w-0 absolute -top-5"
        id="inp"
      />
      <label htmlFor="inp">
        <section className="flex  flex-wrap gap-1 p-4 items-center justify-center">
          {testString.map((ch, index) => (
            <Char ch={ch} typedText={typedText} index={index} />
          ))}
        </section>
      </label>
    </div>
  );
}

export default TypingArea;
