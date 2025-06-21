    /*
    useContext() = React Hook that allows you to share values
    between multiple levels of components without passing props through each level to avoid the prop drailling
    which case alot of headache
    
    To use it we have to follow several steps 

    PROVIDER COMPONENT (Main component)
        1. import {createContext} from 'react';
        2. export const MyContext = createContext(); // Put your function in a variable to use it 
        3.  Sandwich your child component in the provider tag
            <MyContext.Provider value={value}> 
                <Child />
            </MyContext.Provider>

    CONSUMER COMPONENTS
    1. import React, { useContext } from 'react';
    import { MyContext } from './ComponentA';
    2. const value = useContext (MyContext);
    */


    import React , { useState,createContext} from "react"; // {Step 1}
    import ComponentB from './ComponentB.jsx'
    // We have to export it to re-use it in the other files  {Step 2 }
    // eslint-disable-next-line react-refresh/only-export-components
    export let MyContext = createContext();
    function UseContext(){
        // eslint-disable-next-line no-unused-vars
        let [name, setName] = useState("Rana")
        return(
            <>
            <div className="main-div">
                <h1>Hi {name}</h1>
                {/* Step 3 in the provider */}
                <MyContext.Provider value={name}>
                <ComponentB/>
                </MyContext.Provider>
            </div>
            
            </>
        )

    }
    export default UseContext;