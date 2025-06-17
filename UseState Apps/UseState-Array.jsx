
// Here we have to import the usestate hook first 
import React, {useState} from "react"

function UseStateArray(){
    let [arrayElements,setArray] = useState(["Mobile", "LapTop", "Taplet"])

    function handelAddDevice(){
        let newDevice = document.getElementById("addDevice").value;
        document.getElementById("addDevice").value = ""
        if(newDevice !== ""){
        setArray(a => [...a, newDevice])
        }
        else{
            document.getElementById("addDevice").placeholder= "Please, Enter a vaild Device name"
        }
      
    }
    function removeDevice(index){
           setArray(arrayElements.filter( (_,i)=> i !== index))
    }


    return(
        <>
        <h1>Electronics</h1>
        <ul>
        {arrayElements.map((element,index) => <li key={index} onClick= { ()=> removeDevice(index)}>{element}</li>)}            
        </ul>
        <input type="text" id="addDevice" placeholder="Enter Device Name"/>
        <button onClick={handelAddDevice}> Add your device </button>

        </>
    
    )


}
export default UseStateArray