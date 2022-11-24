import React,{ useState } from 'react';

import Display from '../Display/Display'
import KeyBoard from '../KeyBoard/Keyboard'
import './Calculator.css'

function Calculator(){
    const [enteredValue,setEnteredValue] = useState('');
    const [solve,setSolve] = useState(false);

    const valueCollector=(value)=>{
        setEnteredValue(value);
    }

    const equalHandler=(value)=>{
        setSolve(value);
    }

    let val=enteredValue;
    if(solve === true){
    try {
      val = eval(val);
    } catch (error) {
      val="SYNTAX ERROR ";
    }
    }
    
    return(
        <div className='calci'>
            <Display toShow={val}/>
            <KeyBoard onValueHandler={valueCollector} onEqual={equalHandler}/>
        </div>
    );
}

export default Calculator;