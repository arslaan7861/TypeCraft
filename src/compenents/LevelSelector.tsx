import React from "react";
import { Modaltype, typingLevels } from "../App";
type LevelSelectorProps = {
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  level: number;
  textTyped: boolean;
  setModal: React.Dispatch<React.SetStateAction<Modaltype>>;
};

function LevelSelector({
  setLevel,
  level,
  textTyped,
  setModal,
}: LevelSelectorProps) {
  return (
    <article className=" flex flex-col relative w-3/4 items-center z-[50] rounded-full">
      <label
        htmlFor="level"
        className="text-white text-lg uppercase absolute -top-12 font-semibold"
      >
        Select level
      </label>
      <input
        step={1}
        value={level + 1}
        onChange={(e) => {
          if (!textTyped) return setLevel(Number(e.target.value) - 1);
          setModal({
            text: "reset before changing the level",
            show: true,
          });
        }}
        type="range"
        min={1}
        max={10}
        id="level"
        className="w-full h-5 rounded-full bg-bgPrimary focus:outline-none "
      />
      {typingLevels.map((_, lvl) => {
        return (
          <span
            key={lvl}
            style={{
              left: `${lvl * 10.8}%`,
              // left: "100%",
              color: lvl === level ? "var(--primary)" : "white",
            }}
            className="absolute -top-full text-white "
          >
            {lvl + 1}
          </span>
        );
      })}
    </article>
  );
}

export default LevelSelector;
