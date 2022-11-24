import React, { useState } from 'react'

import Button from '../UI/Button'
import './Keyboard.css'

function Keyboard(props) {
  const [enteredValue, setEnteredValue] = useState('0')

  const onClickHandler = (value) => {
    if (value === 'AC') {
      setEnteredValue('0')
      props.onEqual(false)
    } else if (value === 'C') {
      enteredValue.length === 1
        ? setEnteredValue('0')
        : setEnteredValue(enteredValue.slice(0, -1))
      props.onEqual(false)
    } else if (enteredValue.length===16){return}
    else if (enteredValue === '0' && value!=='.') setEnteredValue(value)
    else setEnteredValue(enteredValue + value);
  }

  const onClickEqualHandler = (event) => {
    props.onEqual(true);
  }
  props.onValueHandler(enteredValue);

  return (
    <div className="keyboard">
      <Button onClick={onClickHandler}>AC</Button>
      <Button onClick={onClickHandler}>C</Button>
      <Button onClick={onClickHandler}>%</Button>
      <Button onClick={onClickHandler}>/</Button>
      <Button onClick={onClickHandler}>7</Button>
      <Button onClick={onClickHandler}>8</Button>
      <Button onClick={onClickHandler}>9</Button>
      <Button onClick={onClickHandler}>*</Button>
      <Button onClick={onClickHandler}>4</Button>
      <Button onClick={onClickHandler}>5</Button>
      <Button onClick={onClickHandler}>6</Button>
      <Button onClick={onClickHandler}>-</Button>
      <Button onClick={onClickHandler}>1</Button>
      <Button onClick={onClickHandler}>2</Button>
      <Button onClick={onClickHandler}>3</Button>
      <Button onClick={onClickHandler}>+</Button>
      <Button onClick={onClickHandler}>0</Button>
      <Button onClick={onClickHandler}>.</Button>
      <Button onClick={onClickEqualHandler}>=</Button>
    </div>
  )
}

export default Keyboard
