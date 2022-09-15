import React from "react";
import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    function increment(){
        setCount(prevCount => (prevCount+1));
    }
    function decrement(){
        setCount(prevCount => (prevCount-1));
    }
    function reset(){
        setCount(0);
    }
    return (
        <div className="counter">
            <div className="heading">
            Hi I am a counter and the count value is : {count}
            </div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}
export default Counter;