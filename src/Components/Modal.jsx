import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import {
  ModalContainer,
  ModalContent,
  ModalButton,
} from "./styles/Modal.styled";
import { IoCloseCircleOutline } from "react-icons/io5";

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
        <ModalButton onClick={handleClose}>
          <IoCloseCircleOutline />
        </ModalButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ReactPortal>
  );
}

export default Modal;
