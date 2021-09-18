import React from "react";
import { useAppContext } from "../util/context";

const ModalButton = () => {
  const { openModal } = useAppContext();
  return (
    <button className="btn" onClick={openModal}>
      show modal
    </button>
  );
};

export default ModalButton;
