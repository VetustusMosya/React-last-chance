import "./App.css";
import SpendingsList from "./components/Spendings/SpendingsList";
import { useState } from "react";
import { Button } from "./components/UI/Button";
import FormWrapper from "./components/FormSpending/FormWrapper";

function App() {
  const savedList = JSON.parse(localStorage.getItem("spendingList")) ?? [];
  const [spendingList, changeSpending] = useState(savedList);

  const saveSpendingHandler = (spending) => {
    changeSpending((lastSpendingList) => {
      const newSpendingList = [spending, ...lastSpendingList];
      localStorage.setItem("spendingList", JSON.stringify(newSpendingList));
      return newSpendingList;
    });
  };

  const cleanSpendingList = () => {
    localStorage.removeItem("spendingList");
    changeSpending([]);
  };

  return (
    <div className="container">
      <FormWrapper onSaveSpending={saveSpendingHandler} />
      <Button onClick={cleanSpendingList}>Clean list</Button>
      <SpendingsList spendingList={spendingList} />
    </div>
  );
}

export default App;
