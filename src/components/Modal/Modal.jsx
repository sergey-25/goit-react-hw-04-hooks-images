import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot
  );
}