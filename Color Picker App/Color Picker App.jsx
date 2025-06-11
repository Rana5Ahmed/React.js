
// Here we have to import the usestate hook first 
import React, {useState} from "react"
  function ColorPicker (){
  let [color,setColor] = useState("")
    
    let handelColorChange = (event)=>{
      setColor(event.target.value)
    }
    return (
      <>
      <h1 style={
        {
          textAlign: "center", 
          fontSize:"5em",
          color: color
        }
      }>Color Picker</h1>
      <div style= {
          {
            backgroundColor: color,
            margin: "0 auto",
            padding: "15px", 
            textAlign: "center",
            fontSize: "2em",
            borderRadius: "25px",
            maxWidth: "35%",
            

          }
        }>
        <p>Selected color is: {color}</p>
        </div>

        <div  style= {
          {
            margin: "5px auto",
            padding: "15px", 
            textAlign: "center",
            fontSize: "2em",
          
          }
        }>
        <label > <b>Select a Color:</b></label> <br />
        <input type="color" onChange={handelColorChange} />

      </div>
      </>
    )
  }

export default ColorPicker


