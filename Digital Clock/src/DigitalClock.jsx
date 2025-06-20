
    import React , { useState, useEffect,} from "react";
    function DigitalClock(){
        let[time,setTime]= useState(new Date())
        let selectTime = ""
        let hours = time.getHours()
            if (hours >=12) {
                hours -= 12
                selectTime = "PM"
            }
            else{
                selectTime = "AM"
            }
        useEffect(()=>
            {
                let interval = setInterval(()=>{
                    setTime(new Date())
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
                <span> 0{hours} : {time.getMinutes()}: {time.getSeconds()} {selectTime}
                </span>
            </div>
            </>
        )
    }
    export default DigitalClock;
