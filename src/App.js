import "./App.css";
import SpendingsList from "./components/Spendings/SpendingsList";
import { useState } from "react";
import { Button } from "./components/UI/Button";
import AddSpendingFormWrapper from "./components/FormSpending/AddSpendingFormWrapper";

function App() {
  const savedSpendings = JSON.parse(localStorage.getItem("spendings")) ?? [];

  const [spendings, changeSpendings] = useState(savedSpendings);

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

  return (
    <div className="container">
      <AddSpendingFormWrapper onSaveSpending={saveSpendingHandler} />
      <Button onClick={cleanSavedSpendings}>Clean list</Button>
      <SpendingsList spendings={spendings} />
    </div>
  );
}

export default App;
