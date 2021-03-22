import React, { useState} from 'react'
import {Setting} from './Setting'
import { Type } from './Type'
import { Dropdown } from './Dropdown'
import './Modifier.sass'


export const Modifier = (props) => {

  const {
    handleText, text,
    radioValue, type,
    handleOutline, outline,
    handleBlock, block,
    handleLarge, large,
    handleMin, min
  } = props

  const [open, setOpened] = useState(false);

  return (
    <div className='modifier' >
      <Setting name={'Min'} func={handleMin} state={min} />
      <Setting name={'Large'} func={handleLarge} state={large} />
      <Setting name={'Block'} func={handleBlock} state={block} />
      <Setting name={'Outline'} func={handleOutline} state={outline} />
      <Setting name={'Text'} func={handleText} state={text} />
      <Type setOpened={setOpened} open={open}>
        <Dropdown type={type} radioValue={radioValue} setOpened={setOpened} open={open} />
      </Type>
    </div >
  )

}