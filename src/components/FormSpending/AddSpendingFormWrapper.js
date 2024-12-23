import React, { useState } from "react";
import { Card } from "../UI/Card";
import { AddSpendingForm } from "./AddSpendingForm";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";

const AddSpendingFormWrapper = ({ onSaveSpending }) => {
  const [isShowForm, invertIsShowForm] = useState(false);
  const [isOpenModal, changeIsOpenModal] = useState(false);
  const [errorMessage, getErorrMessage] = useState();

  const showAddSpendingForm = () => {
    invertIsShowForm(() => !isShowForm);
    changeIsOpenModal(false);
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
        <Modal isOpen={isOpenModal} openModal={hideModalHendler}>
          {errorMessage}
        </Modal>
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
