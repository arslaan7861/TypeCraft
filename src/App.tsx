import React from "react";
import TypingArea from "./compenents/typingArea";
import Statusbar from "./compenents/statusbar";
import LevelSelector from "./compenents/LevelSelector";
export const testString: string[] =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla ipsum, necessitatibus voluptatem totam, ea repellendus dolores nesciunt vero sequi beatae ratione incidunt asperiores fugiat facere aut dolorum inventore cupiditate.".split(
    ""
  );

function App() {
  return (
    <div className="relative h-screen w-screen bg-bgPrimary flex items-center  flex-col justify-center">
      <LevelSelector />

      <Statusbar />
      <TypingArea />
    </div>
  );
}

export default App;
