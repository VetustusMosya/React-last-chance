import { Card } from '../UI/Card.js'
import Spending from './SpendingItem.js'
import { Select } from '../UI/Select.js'
import './SpendingList.css'
import { useState } from 'react'


const SpendingsList = (props) => {
  const [filter, changeFilter] = useState("All");

  const getFilterHandler = (event) => {
    changeFilter(()=> event.target.value);
  }

  const filteredList = props.spendingList.filter((spending) => filter==="All" ? true : spending.account === filter)

  return (
    <Card className='spendingList'>
      <Select
          className={"addSpending__box"}
          name={"account"}          
          value={filter}
          data={["All", "belbank", "prior", "cash",]}
          onChange={getFilterHandler}
        />
      {
      filteredList.map(spending => <Spending spending={spending} key={spending.id}/>)}
    </Card>
  )
}
export default SpendingsList

