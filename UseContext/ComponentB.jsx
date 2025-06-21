    
    import ComponentC from "./ComponentC.jsx";
    function ComponentB(){
        return(
            <div className="main-div">
                <h1>This is a ComponentB </h1>
                <ComponentC/>
            </div>
            
        )
    }
    export default ComponentB;