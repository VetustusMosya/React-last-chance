import './App.css'
import SpendingsList from "./components/Spendings/SpendingsList";
import {Form} from "./components/FormSpending/Form";
import { useState } from "react";
import { Button } from './components/UI/Button';

function App() {
  const savedList = JSON.parse(localStorage.getItem('spendingList')) ?? [];
  const [spendingList, changeSpending] = useState(savedList);

  const saveSpendingHandler = (spending) => {
    changeSpending((lastSpendingList)=>{
      const newSpendingList = [
        ...lastSpendingList,
        spending,
      ];      
      localStorage.setItem('spendingList', JSON.stringify(newSpendingList));
      return newSpendingList; 
    })    
  }

  const cleanSpendingList = () => {
    localStorage.removeItem('spendingList');
    changeSpending([]);
  }

  return (
      <div className="container">        
        <Form onSaveSpending={saveSpendingHandler} />
        <Button onClick={cleanSpendingList}>Clean list</Button>
        <SpendingsList spendingList={spendingList}/>

      </div> 
       );
}

export default App;
