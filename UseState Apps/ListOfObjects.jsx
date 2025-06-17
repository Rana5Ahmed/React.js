import React, { useState } from "react";

function ListOfObjects() {
    let [car,setCar] = useState([])
    let [carYear,setYear] = useState()
    let [carModel,setModel] = useState("")
    let [carMake,setMake] = useState("")


        function handelCar(){
        let newCar = {
            year: carYear,
            model:carModel,
            make:carMake
        }
        setCar(c=> [...c,newCar])
        setYear("")
        setModel("")
        setMake("")
    }

    function handelYearChange(event){
        setYear(event.target.value)
        
        
    }
    function handelModelChange(event){
        setModel(event.target.value)
        

    }
    function handelMakeChange(event){
        setMake(event.target.value)
        
    }


    function handelDeleteCar(index){
        setCar(car.filter((_,i)=> i !==index  ))
    }
    
    return(

        <>
        <h1>List of Car Objects</h1>
        <ul>
            {car.map((car,index)=> <li key={index} onClick={()=>handelDeleteCar(index)}>{car.year} {car.model} {car.make}</li>)}
        </ul>
        <input type="number" placeholder="The Year" value={carYear} onChange={handelYearChange}/>
        <input type="text" placeholder="The Model" value={carModel} onChange={handelModelChange} />
        <input type="text"  placeholder="Who made it ?" value={carMake} onChange={ handelMakeChange}/>
        <button onClick={handelCar}> Add car</button>
        </>
    )
}
export default ListOfObjects
