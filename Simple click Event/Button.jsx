
//   Simple button using click event
  function Button (){
    
    // let eventHandeler = (name) => console.log(`hi ${name}`)
    
    let changeTheInnerText = (e) => e.target.innerText = "You clicked me "
    return (
        // Here we have to put the event in that form to be executed only when the button clicked 

        <button onClick={(e)=> changeTheInnerText(e)}>
            Click here
        </button>
    

    )
  }

export default Button


