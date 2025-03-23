import { useRef, useState } from "react";
import { Card } from "../UI/Card";
import { AddSpendingForm } from "./AddSpendingForm";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./AddSpendingFormWrapper.css";

const AddSpendingFormWrapper = ({ onSaveSpending }) => {
  const [isShowForm, invertIsShowForm] = useState(false);
  const [isOpenModal, changeIsOpenModal] = useState(false);
  const [errorMessage, getErorrMessage] = useState();
  const nodeRef = useRef(null);

  const showAddSpendingForm = () => {
    invertIsShowForm(() => !isShowForm);
  };

  const openModalHendler = (error) => {
    getErorrMessage(error);
    changeIsOpenModal(true);
  };

  const hideModalHendler = () => {
    changeIsOpenModal(false);
  };

  return (
    <Card>
      <CSSTransition
        in={isShowForm}
        classNames="form"
        timeout={500}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <AddSpendingForm
          ref={nodeRef}
          onSaveSpending={onSaveSpending}
          hideForm={showAddSpendingForm}
          openModal={openModalHendler}
        />
      </CSSTransition>
      <Button onClick={showAddSpendingForm}>Add spending</Button>
      {isOpenModal &&
        createPortal(
          <Modal isOpen={isOpenModal} openModal={hideModalHendler}>
            <p>{errorMessage}</p>
          </Modal>,
          document.getElementById("modal")
        )}
    </Card>
  );
};

export default AddSpendingFormWrapper;
