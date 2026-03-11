import { useState } from "react"
import "./ForgetPassword.css"

const ForgetPassword = ()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const handleSubmitForm = (e)=>{
        e.preventDefault()
        alert("email" + email + "password: " + password)
    }
    return(
        <div className="fp-container">
            <h3 className="fp-title">Forgot Password</h3>
            <form>
                <div className="fp-form-field">
                    <label>Email</label>
                    <input type="email" placeholder="Enter Your Valid Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                 <div className="fp-form-field">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter new strong Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                 <div className="fp-form-field">
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="Re enter your new password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="fp-submit-btn">Forgot Password</button>
            </form>

        </div>
    )
    
}
export default ForgetPassword