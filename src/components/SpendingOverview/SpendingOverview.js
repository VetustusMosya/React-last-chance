import React, { useContext } from "react";
import { Card } from "../UI/Card";
import SpendingContext from "../../context/spendingContext";

export const SpendingOverview = () => {
  const { totalAmount } = useContext(SpendingContext);
  return (
    <Card>
      <h2>Total spendings: {totalAmount}</h2>
      <h3>Belbank:</h3>
      <h3>Prior:</h3>
      <h3>Cash:</h3>
    </Card>
  );
};
