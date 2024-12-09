import SpendingsList from "./components/Spendings/SpendingsList";
import './App.css'
import { Form } from "./components/FormSpending/Form";
import { useState } from "react";

function App() {

  const [spendingList, changeSpending] = useState([])

  const saveSpendingHandler = (spending) => {
    changeSpending((lastSpendingList)=>{
      spending.id = Symbol('spendingId');
      console.log(spending.id);
      return[
        ...lastSpendingList,
        spending,
      ]
    })
  }

  return (
      <div className="container">
        <Form onSaveSpending={saveSpendingHandler} />
        <SpendingsList spendingList={spendingList}/>
      </div> 
       );
}

export default App;
