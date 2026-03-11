import { useRef } from "react"

 const UnControlledFormExample =()=>{
    const emailRef = useRef()
    const handleClick = ()=>{
        alert("Your email is :" + emailRef.current.value)

    }
    return(
        <div>
            <h4>UnControlled Form Example</h4>
            <input placeholder="Enter your email" type="email" ref={emailRef} />
            <p>Email:{emailRef.current && emailRef.current.value}</p>
            <button onClick={handleClick}>Show Email</button>
            
        </div>
    )
 }
 export default UnControlledFormExample