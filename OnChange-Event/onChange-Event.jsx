
// Here we have to import the usestate hook first 
import React, {useState} from "react"
  function OnChangeFunction (){
  let [name,setName] = useState("")
  let [comment,setComment] = useState("")
  let [payment, setPayment] = useState("")

  let handelNameChange = (event)=>{
      setName(event.target.value)
  }

  let handelCommentChange = (event)=>{
      setComment(event.target.value)
  }

  let handelOptionChange = (event)=>{
      setPayment(event.target.value)
  } 

    return (
      <>
      <label> Name</label> <br />
      <input type="text" onChange={handelNameChange}/>
      <p>The name is : {name}</p>
      
      <textarea onChange={handelCommentChange}></textarea>
      <p> Your comment is : {comment}</p>

      <select onChange={handelOptionChange }>
        <option value="Select an Option ">Select an Option </option>
        <option > Visa </option>
        <option> MasterCard </option>
        <option> GiftCard</option>
      </select>
      <p>Your payment method is: {payment}</p>
      </>
    )
  }

export default OnChangeFunction


