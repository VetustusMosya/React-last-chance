import React, { useState } from "react";
import { Card } from "../UI/Card";
import { AddSpendingForm } from "./AddSpendingForm";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { createPortal } from "react-dom";

const AddSpendingFormWrapper = ({ onSaveSpending }) => {
  const [isShowForm, invertIsShowForm] = useState(false);
  const [isOpenModal, changeIsOpenModal] = useState(false);
  const [errorMessage, getErorrMessage] = useState();

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

  if (isShowForm) {
    return (
      <Card>
        <AddSpendingForm
          onSaveSpending={onSaveSpending}
          hideForm={showAddSpendingForm}
          openModal={openModalHendler}
        />
        {isOpenModal &&
          createPortal(
            <Modal isOpen={isOpenModal} openModal={hideModalHendler}>
              {errorMessage}
            </Modal>,
            document.getElementById("modal")
          )}
      </Card>
    );
  }

  return (
    <Card>
      <Button onClick={showAddSpendingForm}>Add spending</Button>
    </Card>
  );
};

export default AddSpendingFormWrapper;
