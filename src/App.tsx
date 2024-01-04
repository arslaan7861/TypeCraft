import React, { useState } from "react";
import TypingArea from "./compenents/typingArea";
import Statusbar from "./compenents/statusbar";
import LevelSelector from "./compenents/LevelSelector";
import Modal from "./compenents/Modal";

export const typingLevels: string[] = [
  "The quick brown fox jumps over the lazy dog. It was a sunny day in the forest, and the animals were busy with their daily activities. The fox, known for its agility, effortlessly leaped over obstacles, leaving the onlookers in awe of its grace and speed.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius imperdiet odio, id aliquet neque vulputate nec. Aenean auctor tortor quis nulla fermentum, a bibendum justo blandit. Sed tristique ligula eget tortor fermentum, nec dapibus risus scelerisque. Nulla facilisi.",
  "In a hole in the ground, there lived a hobbit named Bilbo Baggins. One day, Gandalf the wizard visited Bilbo and invited him on an unexpected journey. Little did Bilbo know that this adventure would take him to distant lands, encountering dragons, dwarves, and magical rings.",
  "Two households, both alike in dignity, in fair Verona, where we lay our scene. From ancient grudge break to new mutiny, where civil blood makes civil hands unclean. From forth the fatal loins of these two foes, a pair of star-crossed lovers take their life.",
  "The mitochondria is the powerhouse of the cell. These small organelles play a crucial role in cellular respiration, converting nutrients into energy. ATP, or adenosine triphosphate, is the currency of this energy transfer process. Without mitochondria, cells would struggle to meet their energy demands.",
  "The uncertainty principle, formulated by Werner Heisenberg, asserts that the more precisely the position of a particle is known, the less precisely its momentum can be determined. This fundamental concept in quantum mechanics highlights the inherent limitations in simultaneously measuring certain pairs of properties of a particle.",
  "E=mc^2 is the famous equation derived by Albert Einstein in his theory of relativity. It expresses the equivalence of energy (E) and mass (m) with the speed of light (c) as a constant. This groundbreaking formula revolutionized our understanding of the interplay between matter and energy.",
  "The concept of artificial intelligence involves creating machines capable of performing tasks that typically require human intelligence. These tasks include problem-solving, learning, and adapting to new situations. AI technologies, such as machine learning and neural networks, continue to advance, impacting various fields like healthcare, finance, and automation.",
  "Quantum entanglement is a phenomenon in quantum physics where two or more particles become connected in such a way that the state of one particle instantly influences the state of the other, regardless of the distance between them. This mysterious connection challenges our classical understanding of space and time.",
  "The intricacies of quantum field theory and the pursuit of a unified theory of everything remain forefront in theoretical physics. Researchers delve into the complexities of particle interactions, seeking a comprehensive framework that harmonizes the principles of quantum mechanics and general relativity, unraveling the mysteries of the universe.",
];

export type Modaltype = {
  text: string;
  show: boolean;
};
function App() {
  const [level, setLevel] = useState<number>(0);
  const [typedText, setTypedtext] = useState<string>("");
  const [modal, setModal] = useState<Modaltype>({
    text: "",
    show: false,
  });

  return (
    <div className="relative overflow-hidden gap-5 h-screen w-screen bg-bgPrimary flex items-center  flex-col justify-center">
      <LevelSelector
        textTyped={typedText.length !== 0}
        setLevel={setLevel}
        level={level}
        setModal={setModal}
      />
      <Statusbar />
      <TypingArea
        setTypedtext={setTypedtext}
        typedText={typedText}
        level={level}
      />
      {modal.show && <Modal modal={modal} setModal={setModal} />}
    </div>
  );
}

export default App;
