import "./Modal.css";
import { Button } from "./Button";
import React, { useRef, useEffect } from "react";

export const Modal = ({ isOpen, openModal, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  const clickBackdropHeandler = (event) => {
    if (event.target === ref.current) {
      openModal();
    }
  };

  return (
    <dialog
      ref={ref}
      className="modal"
      id="pop-up"
      onClick={clickBackdropHeandler}
    >
      {children}
    </dialog>
  );
};
