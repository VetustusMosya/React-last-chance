import { Card } from '../UI/Card.js'
import Spending from './Spending'
import './SpendingList.css'


const SpendingsList = (props) => {
  return (
    <Card className='spendingList'>
      {props.spendingList.map(spending => <Spending spending={spending}> </Spending>)}
    </Card>
  )
}
export default SpendingsList

// {props.data.map(option => <option value={option}>{option}</option>)}