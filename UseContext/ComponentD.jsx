
    import React , { useContext} from "react"; // {Step 1 in the CONSUMER}
    import { MyContext } from "./UseContext.jsx"; // {Step 1 part 2}
    function ComponentD(){
            const value = useContext (MyContext) // Finally, use that value
        return(
            <div className="main-div">
                <h1>This is a ComponentD<br /> Hi again {value}</h1>
            </div>
        )
    }
    export default ComponentD;