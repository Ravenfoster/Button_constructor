import React from 'react'


export const Setting = (props) => {

  const { name, func, state } = props

  const renderItem = (name, func, state) => {
    return (
      <div className='modifier__block' onChange={() => func(!state)} >
        <input type='checkbox' id={name} />
        <label htmlFor={name}>{name}</label>
      </div>
    )
  }

  return (
    renderItem(name, func, state)
  )
}