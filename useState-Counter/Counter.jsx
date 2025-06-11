
// Here we have to import the usestate hook first 
import React, {useState} from "react"
//   This is a simple counter Project, Has 3 buttons (Decrement,Reset, and Increment )
  function Counter (){


  let [counter,setCounter] = useState(0)

  let decrementButton = ()=>{
   // This code if you want +ve values ONLY 
    // if(counter>0)
      setCounter(counter - 1)
    // else
    //   setCounter(counter = 0)
    }
  let resetButton = ()=>{
      setCounter(counter = 0)
    } 
  let incrementButton = ()=>{
      setCounter (counter + 1)
    }
    

    return (
      <>
      <h1> {counter}</h1>
      <button onClick={incrementButton}> Increment </button>
      <button onClick={resetButton}> Reset </button>
      <button onClick={decrementButton}> Decrement </button>
      
      
      </>
    )
  }

export default Counter


