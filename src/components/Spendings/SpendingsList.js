import { Card } from '../UI/Card.js'
import Spending from './Spending'
import './SpendingList.css'


const SpendingsList = () => {

  const spendingData = [
    {
      category: 'red',
      money: 6,
      currency: '$',
      account: 'cash',
      date: 'today',
    },
    {
      category: 'green',
      money: 68,
      currency: 'Br',
      account: 'belbank', 
      date: 'yesterday',
    },
    {
      category: 'orange',
      money: 103,
      currency: '₽',
      account: 'prior',     
      date: 'tomorrow',
    }
  ]

  return (
    <Card className='spendingList'>
      <Spending data={spendingData[0]} />
      <Spending data={spendingData[1]} />
      <Spending data={spendingData[2]} />
    </Card>
  )
}
export default SpendingsList