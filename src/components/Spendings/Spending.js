import React from 'react'
import './Spending.css'

function Spending({data}) {
    const {account, money, category, currency, date} = data
  return (
    <div className='spending__item'>
        <p className='category spending__item--basic'>{category}</p>
        <p className='money spending__item--basic'>{money} <span>{currency}</span></p>
        <p className='account'>{account}</p>
        <p className='date'>{date}</p>
    </div>
  )
}

export default Spending