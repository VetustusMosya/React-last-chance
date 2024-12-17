import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Form } from "./Form";
import { Button } from "../UI/Button";

const FormWrapper = (prop) => {
  const [isShowForm, showForm] = useState(false);

  const showFormHandler = () => {
    showForm(() => true);
  };

  const hideForm = () => {
    showForm(() => false);
  };

  const form = (
    <Form onSaveSpending={prop.onSaveSpending} onHideForm={hideForm}></Form>
  );
  const changeShowFormButton = (
    <Button onClick={showFormHandler}>Add spending</Button>
  );

  return <Card>{isShowForm ? form : changeShowFormButton}</Card>;
};

export default FormWrapper;
