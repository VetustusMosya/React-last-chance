import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";
import "./AddSpendingForm.css";

export const AddSpendingForm = ({ onSaveSpending, hideForm, openModal }) => {
  const dateNow = new Date().toISOString().slice(0, 10);
  const defaultSpening = {
    category: "",
    money: "",
    account: "belbank",
    date: dateNow,
  };

  const [spending, inputValueOfSpending] = useState(defaultSpening);

  const getInputValueHandler = (event) => {
    inputValueOfSpending((lastSpending) => {
      return {
        ...lastSpending,
        [event.target.id]: event.target.value,
      };
    });
  };

  const submitSpendingHandler = (event) => {
    event.preventDefault();
    if (validateSpending(spending)) {
      onSaveSpending(spending);
      cleanSpendingForm();
      hideForm();
    }
  };

  const validateSpending = (spending) => {
    // spending.category.trim() && spending.money
    const errors = [];
    if (+spending.money < 1) {
      spending.money === ""
        ? errors.push("empty money label")
        : errors.push("label money can't be negative");
    }
    if (spending.category.trim().length === 0) {
      errors.push("empty category label");
    }
    if (errors.length === 0) {
      return true;
    }
    openModal(`Errors:  ${errors.join(` & `)}`);
    return false;
  };

  const resetHandler = (event) => {
    event.preventDefault();
    cleanSpendingForm();
    hideForm();
  };

  const cleanSpendingForm = () => {
    inputValueOfSpending(() => {
      return defaultSpening;
    });
  };

  return (
    <form className="addSpending__form" onSubmit={submitSpendingHandler}>
      <Input
        className="addSpending__box"
        id="category"
        value={spending.category}
        type="text"
        onChange={getInputValueHandler}
      >
        Category
      </Input>
      <Input
        className="addSpending__box"
        id="money"
        value={spending.money}
        type="number"
        onChange={getInputValueHandler}
      >
        Money
      </Input>
      <Select
        className="addSpending__box"
        name="account"
        value={spending.account}
        options={["belbank", "prior", "cash"]}
        onChange={getInputValueHandler}
      >
        Account
      </Select>
      <Input
        className="addSpending__box"
        id="date"
        type="date"
        value={spending.date}
        onChange={getInputValueHandler}
      >
        Date
      </Input>
      <div className="addSpending__box addSpending__box--buttons">
        <Button type="submit">Add spending</Button>
        <Button type="reset" onClick={resetHandler}>
          Clean
        </Button>
      </div>
    </form>
  );
};
