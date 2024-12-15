import "./Spending.css";

function Spending({ spending }) {
  const { account, money, category, currency, date, } = spending;  

  return (
    <div className="spending__item">
      <p className="category basic">{category}</p>
      <p className="money basic">
        {money} <span>{currency}</span>
      </p>
      <p className="account">{account}</p>
      <p className="date">
        {date}
      </p>
    </div>
  );
}

export default Spending;
