import { useState } from "react"

const ControlledFormExample =()=>{
    const[fullName, setFullName]=useState("")
    return(
        <div>
            <h4>Controlled Form Example</h4>
            <input placeholder="Enter your full name" type="text" onChange={(e)=>{
                setFullName(e.target.value)
            }}/>
            <p>Full Name:{fullName}</p>
        </div>
    )
}
export default ControlledFormExample