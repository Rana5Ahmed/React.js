
    import React , { useState, useEffect,} from "react";

    function DigitalClock(){
        let[hours,setHours]= useState(new Date().getHours())
        let[minutes,setMinutes]= useState(new Date().getMinutes())
        let[seconds,setSeconds]= useState(new Date().getSeconds())
        let selectTime = ""
            if (hours>=12) {
                hours = hours  -12
                selectTime = "PM"
            }
            else{
                selectTime = "AM"
            }
        useEffect(()=>
            {
                let interval = setInterval(()=>{
                    setHours(new Date().getHours())
                    setMinutes(new Date().getMinutes())
                    setSeconds(new Date().getSeconds())
                }
                ,1000 )
                
                // This Clean up is super important to avoid twinkling in the output 
            return()=>{
                clearInterval(interval)
            }
            }
          
            
        )
        return(
            <>
            <div className="main-div">
                <span>0{hours} : </span>
                <span>{minutes} : </span>
                <span>{seconds} {selectTime}
                </span>
            </div>
            </>
        )
    }
    export default DigitalClock;