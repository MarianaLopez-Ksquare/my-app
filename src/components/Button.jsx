import React from 'react'
import '../index.css'

export function Button() {
  let [ numItems, setNumItems ] = React.useState(0);

  return (
    <div className='incrementador'>
        <button onClick={ () => {setNumItems( numItems--)}}>-</button>
        <span id="itemsN">{numItems}</span>
        <button onClick={ () => {setNumItems( numItems++)}}>+</button>
    </div>
  )
}