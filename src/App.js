import "./App.css";
import SpendingsList from "./components/Spendings/SpendingsList";
import { useState } from "react";
import { Button } from "./components/UI/Button";
import AddSpendingFormWrapper from "./components/FormSpending/AddSpendingFormWrapper";
import { Modal } from "./components/UI/Modal";

function App() {
  const savedSpendings = JSON.parse(localStorage.getItem("spendings")) ?? [];

  const [spendings, changeSpendings] = useState(savedSpendings);
  const [isOpenModal, changeIsOpenModal] = useState(false);

  const saveSpendingHandler = (spending) => {
    changeSpendings((lastSpendings) => {
      const updateSpendings = [spending, ...lastSpendings];
      localStorage.setItem("spendings", JSON.stringify(updateSpendings));
      return updateSpendings;
    });
  };

  const cleanSavedSpendings = () => {
    localStorage.removeItem("spendings");
    changeSpendings([]);
  };

  const openModalHendler = () => {
    changeIsOpenModal((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="container">
      <AddSpendingFormWrapper
        onSaveSpending={saveSpendingHandler}
        openModal={openModalHendler}
      />
      <Button onClick={cleanSavedSpendings}>Clean list</Button>
      <SpendingsList spendings={spendings} />
      <Modal isOpenModal={isOpenModal} openModal={openModalHendler}></Modal>
    </div>
  );
}

export default App;
