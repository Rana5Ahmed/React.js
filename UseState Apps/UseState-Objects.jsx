
// Here we have to import the usestate hook first 
import React, {useState} from "react"

  function InteracteObject (){
    let [car,setCar] = useState({year: 2025, make: "BMW", model: "X8"})
    
    let handelYearChange = (e) =>{
      //Here We have to insert the object inside a () because we are using updater function
      // We used spread operator to show the rest of the values That is related to the car object 
      // Here => ...c means--> {year: 2025, make: "BMW", model: "X8"} Then year:e.target is added and overwrite the old value 
      setCar(c => ({...c,year:e.target.value}))
    } 
    
    let handelMakeChange = (e) =>{
      setCar(c=> ({...c, make:e.target.value}))
    } 
    let handelModelChange = (e) =>{
      setCar(c => ({...c,model:e.target.value}))
    } 

    return(
      <div>
          <p> My Fav car is : {car.year} {car.make} {car.model}</p>
          <input type="number" value={car.year} onChange={handelYearChange}/>
          <input type="text" value={car.make} onChange={handelMakeChange}/>
          <input type="text" value={car.model} onChange={handelModelChange}/>
      </div>
    )
    
  
  
  
  }
export default InteracteObject


