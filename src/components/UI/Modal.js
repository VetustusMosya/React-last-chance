import "./Modal.css";
import { Button } from "./Button";
import React from "react";

export const Modal = (props) => {
  const isOpen = props.isOpenModal ? "open" : "";
  return (
    <dialog open={isOpen} className="modal" id="pop-up">
      {props.children}
      <h3>Заголовок</h3>
      <p>Error of form</p>
      <Button onClick={props.openModal}>Ok</Button>
    </dialog>
  );
};
