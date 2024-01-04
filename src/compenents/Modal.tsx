import React, { useEffect } from "react";
import { Modaltype } from "../App";

type Modalproptypes = {
  modal: Modaltype;
  setModal: React.Dispatch<React.SetStateAction<Modaltype>>;
};

function Modal({ modal, setModal }: Modalproptypes) {
  useEffect(() => {
    setTimeout(() => {
      setModal({ text: "", show: false });
    }, 3000);
  });
  return (
    <div className="absolute bottom-16 px-4 py-1 rounded-full shadow-3d text-sm bg-primary uppercase text-white animate-pop">
      {modal.text}
    </div>
  );
}

export default Modal;
