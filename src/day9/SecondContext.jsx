import { useContext } from "react"
import { DataContext } from "./UseContextHook"

const SecondContext=()=>{
        let data=useContext(DataContext)
    
    return(
        <div>
            <h1>Second Context Component</h1>
            <b>Data:{data}</b>
        </div>
    )
}
export default SecondContext