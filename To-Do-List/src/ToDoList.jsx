
    import React , { useState } from "react";

    function ToDoList(){

        let [tasks,setTasks] = useState([]);


        function addTask(){
            let newTask = document.getElementById("inputPlace").value
            if (newTask === "") 
            document.getElementById("inputPlace").placeholder = "Please, Enter a Vaild Task"
            else{
            setTasks(t => ([...t,newTask]))
            document.getElementById("inputPlace").value = ""
        }}

        function removeTask(index){
           setTasks( tasks.filter(( _ , i)=> i !== index))
        }

        function upTask(index){
        // Always remember to take a copy of the array and work on that copy (Don't work directly)
            let Copy = [...tasks]
            let targetTask= Copy[index]
                if(index === 0)
                    targetTask = Copy[index]
        else{
            Copy[index] = Copy[index -1]
            Copy[index - 1] = targetTask 
            setTasks(Copy)
        }
        }
        
        function downTask(index){
            let Copy = [...tasks]
            let targetTask = Copy[index]
                if(index === Copy.length -1 )
                    targetTask= Copy[index]
                else{
                    Copy[index] = Copy[index + 1]
                    Copy[index + 1] = targetTask 
                    setTasks(Copy)
        }
    }

    return(<>
        <h1>To-Do-List</h1>
        <input type="text" placeholder="Enter a Task" id="inputPlace" /> 
        <button id="btn-add" onClick={()=> addTask() }>Add</button>
        <ul>
            {tasks.map((task,index)=>
            < li id="parent" key={index}>
            <span  id="listItems"> {task} 
            <button id="btn-del" onClick={()=> removeTask(index)}>Delete</button>
            <button className="btn-image" onClick={()=> upTask(index)}> <img src="../src/assets/up-arrow.png"/></button>
            <button className="btn-image" onClick={()=> downTask(index)}><img src="../src/assets/download.png"/></button>    
            </span>
            </li>
         
        )}
        </ul>
    </>)
    }
    export default ToDoList;