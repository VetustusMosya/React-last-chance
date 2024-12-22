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
    // currency: 'belrub',
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
    if (spending.category.trim() && spending.money) {
      spending.id = Date.now().toString(32);
      onSaveSpending(spending);
      cleanSpendingForm();
      hideForm();
    } else {
      openModal();
    }
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
      {/* <Select
          className={"addSpending__box"}
          name={"currency"}
          value={spending.currency}
          data={["belrub", "dollar", "rub"]}          
          onChange={getCategoryHandler}
        >
          Currency
        </Select> */}
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
