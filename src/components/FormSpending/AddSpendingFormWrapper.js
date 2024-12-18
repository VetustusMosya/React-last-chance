import React, { useState } from "react";
import { Card } from "../UI/Card";
import { AddSpendingForm } from "./AddSpendingForm";
import { Button } from "../UI/Button";

const AddSpendingFormWrapper = ({ onSaveSpending }) => {
  const [isShowForm, invertIsShowForm] = useState(false);

  const showAddSpendingForm = () => {
    invertIsShowForm(() => !isShowForm);
  };

  if (isShowForm) {
    return (
      <Card>
        <AddSpendingForm
          onSaveSpending={onSaveSpending}
          hideForm={showAddSpendingForm}
        ></AddSpendingForm>
      </Card>
    );
  }

  return (
    <Card>
      <Button onClick={showAddSpendingForm}>Add spending</Button>
    </Card>
  );
};

export default AddSpendingFormWrapper;
