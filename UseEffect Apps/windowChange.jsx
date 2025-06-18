
    import React , { useState, useEffect } from "react";
 
    function WindowChange(){
        let [width,setWidth] = useState(window.innerWidth)
        let [height,setHeight] = useState(window.innerHeight)

        useEffect(()=>{
               window.addEventListener("resize",resizeHandler)
               console.log("Event Listener has been Added");
               
        
        return()=> {
            //Cleaning UP
            window.removeEventListener("resize",resizeHandler)
            console.log("Event Listener has been Removed");

        }
        }
    ,[])
        function resizeHandler() {
                setWidth(window.innerWidth)
                setHeight(window.innerHeight)
            }
        

    return(
        <>
        <p> Width is : {width}</p>
        <p> Height is : {height}</p>
        </>
    )

    }
    export default WindowChange;
