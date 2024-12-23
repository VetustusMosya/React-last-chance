import "./Modal.css";
import { Button } from "./Button";
import React from "react";

export const Modal = (props) => {
  const isOpen = props.isOpen ? "open" : "";

  return (
    <dialog open={isOpen} className="modal" id="pop-up">
      <h3>Error</h3>
      <p>{props.children}</p>
      <Button onClick={props.openModal}>Ok</Button>
    </dialog>
  );
};
