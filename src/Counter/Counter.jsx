import React, {useState} from 'react'
import './Counter.css'
const Counter = () => {

    const[counterValue, setCounterValue] = useState(0)
    const[inputValue, setInputValue] = useState(1)
    return (
        <div>
            <h3 data-testid = "header">Counter Header</h3>
            <h2 
            data-testid = "counter"
            className = {`${counterValue >= 100 ? "green" : ""} ${counterValue <= -100 ? "red" : ''}`}
            >    
            {counterValue}
            </h2>
            <button 
            data-testid = "substractButton" 
            onClick = {() => {setCounterValue(counterValue - inputValue)}}>-</button>
            <input 
            className = "input-id" 
            type = "number" 
            data-testid = "input" 
            value = {inputValue}
            onChange = {(e) => {setInputValue(parseInt(e.target.value))}}
            />
            <button 
            data-testid = "addButton" 
            onClick = {() => {setCounterValue(counterValue + inputValue)}}>+</button>
        </div>
    )
}

export default Counter
