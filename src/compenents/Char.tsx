import React from "react";
import { typingLevels } from "../App";

type Charprops = {
  ch: string;
  index: number;
  typedText: string;
  level: number;
};

function Char({ ch, index, typedText, level }: Charprops) {
  let color: "white" | "#fb0d01" | "#01fb69" = !typedText[index]
    ? "white"
    : typedText[index] === typingLevels[level][index]
    ? "#01fb69"
    : "#fb0d01";

  return (
    <div
      style={{
        color: `${color}`,
      }}
    >
      {ch}
    </div>
  );
}

export default Char;
