import { useContext } from "react"
import { MyContext } from "./my_context"


const Homee = ()=>{
    let theme = useContext(MyContext)
    return(
        <div>
            <div style={{
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
                height: "400px",
                padding: "20px" 
            }}>
                <h1>Home</h1>
                <p>Theme</p>
            </div>
        </div>
    )
}
export default Homee




