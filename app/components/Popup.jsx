import { useEffect, useRef } from "react";
import { useMainContext } from "../src/store/MainStore";

const Modal = (props) => {
  const { showModal, setShowModal } = useMainContext();
  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        setShowModal(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [showModal]);

  return (
    <div ref={modalRef} className={`modal ${showModal ? "active" : ""}`}>
      <div className="modal__content">
        {!props.hideCloseButton && (
          <span onClick={() => setShowModal(false)} className="modal__close">
            &times;
          </span>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

export const ModalHeader = (props) => {
  return <div className="modal__header">{props.children}</div>;
};

export const ModalBody = (props) => {
  return <div className="modal__body">{props.children}</div>;
};

export const ModalFooter = (props) => {
  return <div className="modal__footer">{props.children}</div>;
};
