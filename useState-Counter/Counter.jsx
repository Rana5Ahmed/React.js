
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


// Update using the updater function 

// Here we have to import the usestate hook first 
import React, {useState} from "react"
//   This is a simple counter Project, Has 3 buttons (Decrement,Reset, and Increment )
// Here we will add the concept of updater function which is used in setState() and has super powers in multiple state update, Because it works with previous values of the useState not the current value 
  function Counter (){


  let [counter,setCounter] = useState(0)

  let decrementButton = ()=>{
   // This code if you want +ve values ONLY 
    // if(counter>0)
    /* Instead of using this => setCounter(counter - 1)
    We will use Updater function 
    */
   // The function is the same , but in case you what to call the setCounter several times then The power of updater function will appear
    setCounter(c => c - 1 )
    setCounter(c => c - 1 ) // that means the Decremant button will decrement by 2 
      
    // else
    //   setCounter(counter = 0)
    }
  let resetButton = ()=>{
      setCounter(0)
    } 
  let incrementButton = ()=>{
      setCounter (c => c + 1 ) // C => Represents the previous value of the counter 
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





