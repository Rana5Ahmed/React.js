    /* 
    useState() and useRef are pretty the same, but what is the diffrence ?
    //Some Notes:-  
        "Render" means showing the content of the webpage on the screen for the first time.
        "Re-render" means updating the page again (part of it or all of it) because something changed.

    •  useState() = Re-renders the component when the state value changes

    •  useRef() = "use Reference" Does not cause re-renders when its value changes.
    it used in:-
    1. Accessing/Interacting with DOM elements
    2. Handling Focus, Animations, and Transitions
    3. Managing Timers and Intervals
    */
        
    // eslint-disable-next-line no-unused-vars
    import React,{useRef,useEffect, useState} from "react";

    function UseRefrence(){
        // let [ref,setRef] = useState(0)

        let ref = useRef(0)
        useEffect(()=>{
            console.log("Render Done");
            
        },)
    function Increase() {
      
        // setRef(r => r+1);
        console.log(ref.current+= 1);
        
        
    }
        return(
            <div className="main-div">
                <button style={{
                    width: "50%",
                    padding: "15px",
                    fontSize: "1em"
                }} onClick={Increase}>Increase In Console</button>
            </div>
        )

    }
    export default UseRefrence;