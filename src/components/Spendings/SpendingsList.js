import { Card } from "../UI/Card.js";
import SpendingItem from "./SpendingItem.js";
import { Select } from "../UI/Select.js";
import "./SpendingList.css";
import { useState } from "react";

const SpendingsList = (props) => {
  const [filter, changeFilter] = useState("All");

  const getFilterHandler = (event) => {
    changeFilter(() => event.target.value);
  };

  const filteredSpendings = props.spendings.filter((spending) =>
    filter === "All" ? true : spending.account === filter
  );

  return (
    <Card className="spendingList">
      <Select
        className="addSpending__box"
        name="account"
        value={filter}
        options={["All", "belbank", "prior", "cash"]}
        onChange={getFilterHandler}
      />
      {filteredSpendings.map((spending) => (
        <SpendingItem spending={spending} key={spending.id} />
      ))}
    </Card>
  );
};
export default SpendingsList;
