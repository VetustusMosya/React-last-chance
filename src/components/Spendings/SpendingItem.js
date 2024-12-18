import "./SpendingItem.css";

function SpendingItem({
  spending: { account, money, category, currency, date },
}) {
  return (
    <div className="spending__item">
      <p className="category basic">{category}</p>
      <p className="money basic">
        {money} <span>{currency}</span>
      </p>
      <p className="account">{account}</p>
      <p className="date">{date}</p>
    </div>
  );
}

export default SpendingItem;
