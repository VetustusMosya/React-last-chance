import "./SpendingItem.css";
import { Button } from "../UI/Button";
import SpendingContext from "../../context/spendingContext";
import { useContext } from "react";

function SpendingItem({
  spending: { account, money, category, currency, date, id },
}) {
  const { removeSpending } = useContext(SpendingContext);

  const deleteItem = () => {
    removeSpending(id);
  };

  return (
    <div className="spending__item">
      <p className="category basic">{category}</p>
      <p className="money basic">
        {money} <span>{currency}</span>
      </p>
      <p className="account">{account}</p>
      {/* <p className="date">{date}</p> */}
      <Button onClick={deleteItem}>Delete</Button>
    </div>
  );
}

export default SpendingItem;
