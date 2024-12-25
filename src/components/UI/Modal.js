import "./Modal.css";
import { Button } from "./Button";
import React, { useRef, useEffect } from "react";

export const Modal = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (props.isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.isOpen]);

  return (
    <dialog ref={ref} className="modal" id="pop-up">
      {props.children}
      <Button onClick={props.openModal}>Ok</Button>
    </dialog>
  );
};
