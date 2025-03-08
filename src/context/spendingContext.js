import { createContext } from "react";
import { useState, useEffect } from "react";

const SpendingContext = createContext({
  spendingsList: [],
  accounts: [],
  totalAmount: 0,
  addSpending: () => {},
  removeSpending: () => {},
  cleanSpendingsList: () => {},
});

export const SpendingConstextProvider = (props) => {
  const [spendings, changeSpendings] = useState([]);

  useEffect(() => {
    const savedSpendings = JSON.parse(localStorage.getItem("spendings")) ?? [];
    changeSpendings(savedSpendings);
  }, []);

  const saveSpendingHandler = (spending) => {
    spending.id = Date.now().toString(32);
    changeSpendings((lastSpendings) => {
      const updatedSpendings = [spending, ...lastSpendings];
      localStorage.setItem("spendings", JSON.stringify(updatedSpendings));
      return updatedSpendings;
    });
  };

  const cleanSavedSpendings = () => {
    localStorage.removeItem("spendings");
    changeSpendings([]);
  };

  const spendingContext = {
    spendingsList: spendings,
    accounts: [],
    totalAmount: 0,
    addSpending: saveSpendingHandler,
    removeSpending: () => {},
    cleanSpendingsList: cleanSavedSpendings,
  };

  return (
    <SpendingContext.Provider value={spendingContext}>
      {props.children}
    </SpendingContext.Provider>
  );
};

export default SpendingContext;

// {
//   category: "aaa",
//   money: "ssss",
//   account: "belbank",
//   date: dateNow,
// }

// const savedSpendings = JSON.parse(localStorage.getItem("spendings")) ?? [];
