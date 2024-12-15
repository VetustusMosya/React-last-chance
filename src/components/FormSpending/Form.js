import { useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";
import "./Form.css";

export const Form = (props) => {
  const dateNow = new Date().toISOString().slice(0, 10);
  const defaultSpening = {
    category: '',
    money: '',
    // currency: 'belrub',
    account: 'belbank',
    date: dateNow,
  }
  const [spending, inputSpending] = useState(defaultSpening)

  const getCategoryHandler = (event) => {
    inputSpending((lastSpending)=>{
      return{
        ...lastSpending,
        [event.target.id]: event.target.value,
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();    
    spending.id =  Date.now().toString(32);
    props.onSaveSpending(spending);
    inputSpending(()=>{ return defaultSpening});
  }

  const resetHandler = (event) => {    
    event.preventDefault();
    inputSpending(()=>{ return defaultSpening});
  }

  return (
    <Card>
      <form className="addSpending__form" onSubmit={submitHandler}>
        <Input className={"addSpending__box"} id={"category"} value={spending.category} type={"text"} onChange={getCategoryHandler}>
          Category
        </Input>
        <Input className={"addSpending__box"} id={"money"} value={spending.money} type={"number"} onChange={getCategoryHandler}>
          Money
        </Input>
        <Select
          className={"addSpending__box"}
          name={"account"}          
          value={spending.account}
          data={["belbank", "prior", "cash",]}
          onChange={getCategoryHandler}
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
        <Input className={"addSpending__box"} id={"date"} type={"date"} value={spending.date} 
          onChange={getCategoryHandler}>
          Date
        </Input>
        <div className="addSpending__box addSpending__box--buttons">
          <Button type="submit">Add spending</Button>
          <Button type="reset" onClick={resetHandler}>Clean</Button>
        </div>
      </form>
    </Card>
  );
};
