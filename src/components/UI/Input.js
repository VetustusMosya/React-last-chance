import React from 'react'

export const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor="">{props.children}</label>
      <input type={props.type} id={props.id} value={props.value} onChange={props.onChange}/>
    </div>
  )
}
