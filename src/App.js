import "./App.css";
import SpendingsList from "./components/Spendings/SpendingsList";
import { useContext } from "react";
import { Button } from "./components/UI/Button";
import AddSpendingFormWrapper from "./components/FormSpending/AddSpendingFormWrapper";
import { SpendingOverview } from "./components/SpendingOverview/SpendingOverview";
import SpendingContext from "./context/spendingContext";

function App() {
  const { spendingsList, addSpending, cleanSpendingsList } =
    useContext(SpendingContext);

  return (
    <div className="container">
      <AddSpendingFormWrapper onSaveSpending={addSpending} />
      <Button onClick={cleanSpendingsList}>Clean list</Button>
      <SpendingsList spendings={spendingsList} />
      <SpendingOverview></SpendingOverview>
    </div>
  );
}

export default App;
