import React from "react";
type Charprops = {
  ch: string;
  index: number;
  typedText: string;
};

function Char({ ch, index, typedText }: Charprops) {
  let color: "white" | "red-500" | "green-500" = !typedText[index]
    ? "white"
    : typedText[index] === ch
    ? "green-500"
    : "red-500";

  return <div className={`text-${color}`}>{ch}</div>;
}

export default Char;
