import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import { ModalContainer, ModalContent } from "./styles/Modal.styled";

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ModalContainer>
        <button onClick={handleClose} className="close-btn">
          Close
        </button>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ReactPortal>
  );
}

export default Modal;
