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

  const totalAmount = spendings.reduce((acc, item) => (acc += +item.money), 0);

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

  const removeSpending = (id) => {
    const newSpendingList = spendings.filter((item) => item.id !== id);
    localStorage.setItem("spendings", JSON.stringify(newSpendingList));
    changeSpendings(newSpendingList);
    // console.log(`${id}`);
  };

  const spendingContext = {
    spendingsList: spendings,
    accounts: [],
    totalAmount: totalAmount,
    addSpending: saveSpendingHandler,
    removeSpending: removeSpending,
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
