
    import React , { useState, useEffect } from "react";
    /*
    useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):\
    This component re-renders => (On Each reload)
    This component mounts (Mount === created on DOM, Unmount === Removed from the dom)
    The state of a value 

    How to use it ?

    useEffect (function, [dependencies])
        1. useEffect(() => {}) // Runs after every re-render 
        2. useEffect(() => {}, []) // Runs only on mount (The very first time only)
        3. useEffect(() => {}, [value]) // Runs on mount + when one of those values changes 
    
    USES
        #1 Event Listeners 
        #2 DOM manipulation 
        #3 Subscriptions (real-time updates) 
        #4 Fetching Data from an API 
        #5 Clean up when a component unmounts => This is used in case of returns a function
    */
    function UseEffectTest(){

        let [count,setCount] = useState(0);
        let [color,setColor]= useState("red")
        
        // This useEffect runs the inside code every time the component is rendered
        useEffect(()=>{
            document.title = `Count ${count}`
        })

        // This means that code will be executed one time only when the component is rendered 
        // Note that => The sentence may be displayed 2 times due to the strict mode (It is okay)
    
        useEffect(()=>{
            let newElement = document.createElement("div")
            let newText = document.createTextNode("This is a text")
            newElement.appendChild(newText)
            document.body.appendChild(newElement)
        },[])

        // This code will be executed whenever the component and whenever 'one of' dependencies are changed  
        useEffect(()=>{
            document.title = `Count: ${count}, Color: ${color}`
        },[count,color])



        function addOne() {
        setCount(c => c + 1)    
        }

        function changeColor() {
        setColor(c => c === "red"? "blue": "red")    
        }
        return(
            <>
            <p>The count is: {count}</p>
            <button onClick={addOne} >ADD</button> <br />
            <button onClick={changeColor} style={{color:color, marginTop:"10px"}}>Change Color</button>
            </>
        )

    }
    export default UseEffectTest;