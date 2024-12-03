import { useState } from "react";



const CounterApp = () => {
    const [counter,setCounter]=useState(0)
    const incrementHandler=()=>{
        setCounter(counter+1)
    }
    const decrementHandler=()=>{
        setCounter(counter-1)
    }
    const resetHandler=()=>{
        setCounter(0)
    }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
};
export default CounterApp;
