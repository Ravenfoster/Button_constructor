import React, { useState } from 'react'
import { Modifier } from './components/Modifier.jsx'
import { Button } from './components/Button.jsx'
import { addDouble_Class, addSingleClass, addSingleClassWithLoader, typeClasses } from './auxilary/funcs'
import {
  Primary, ButtonStyleInit, LoaderStyleInit,
  textConst, outlineConst, styleBlock, styleLarge, styleMin
} from './auxilary/constants'
import actors from './API/actors.json'
import icon from './icon.png'
import './App.sass'


function App() {

  const [state, setState] = useState(null)
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState({ checked: Primary })
  const [text, setText] = useState(false)
  const [outline, setOutline] = useState(false)
  const [block, setBlock] = useState(false)
  const [large, setLarge] = useState(false)
  const [min, setMin] = useState(false)

  const buttonStyle = [ButtonStyleInit]
  const loaderStyle = [LoaderStyleInit]

  const handleMin = (value) => {
    setMin(value)
  }

  const handleLarge = (value) => {
    setLarge(value)
  }

  const handleBlock = (value) => {
    setBlock(value)
  }

  const handleText = (value) => {
    setText(value)
  }

  const handleOutline = (value) => {
    setOutline(value)
  }

  const radioValue = (e) => {
    setType({ checked: e.target.id })
  }

  const getActors = () =>
    new Promise((resolve) => {
      setLoading(true)
      const delay = parseInt(Math.random() * 7000);
      setTimeout(() => {
        resolve(
          setState(actors),
          setLoading(false)
        )
      }, delay)
    })

  typeClasses(type, buttonStyle)
  addDouble_Class(text, buttonStyle, textConst)
  addDouble_Class(outline, buttonStyle, outlineConst)
  addSingleClass(block, buttonStyle, styleBlock)
  addSingleClassWithLoader(large, buttonStyle, loaderStyle, styleLarge)
  addSingleClassWithLoader(min, buttonStyle, loaderStyle, styleMin)

  return (
    <div className="container">
      <div className="wrapper">
        <Modifier
          type={type}
          radioValue={radioValue}
          handleText={handleText}
          text={text}
          handleOutline={handleOutline}
          outline={outline}
          handleBlock={handleBlock}
          block={block}
          handleLarge={handleLarge}
          large={large}
          handleMin={handleMin}
          min={min}
        />
        <div className="buttonArea">
          <Button
            getActors={getActors}
            actors={state}
            loading={loading}
            buttonStyle={buttonStyle}
            loaderStyle={loaderStyle}
          >
            <p>Load actors</p>
            <img src={icon} alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
