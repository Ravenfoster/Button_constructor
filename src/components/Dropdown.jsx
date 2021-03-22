import React from 'react'
import { RadioButton } from './RadioButton'

export const Dropdown = (props) => {

  const { type, radioValue } = props

  return (
    <div className="modifier__dropdown" >
      <RadioButton name={'Primary'} changeValue={radioValue} checked={type.checked} />
      <RadioButton name={'Danger'} changeValue={radioValue} checked={type.checked} />
      <RadioButton name={'Success'} changeValue={radioValue} checked={type.checked} />
      <RadioButton name={'Warning'} changeValue={radioValue} checked={type.checked} />
    </div>
  )
}
