import React from 'react'

export const RadioButton = (props) => {

  return (
    <div>
      <input type="radio"
        id={props.name}
        value={props.value}
        onChange={(e) => props.changeValue(e)}
        checked={props.checked === props.name}
      >
      </input>
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  )
}