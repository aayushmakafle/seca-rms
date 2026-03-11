import { useState } from "react"

const FormValidation = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [emailerror, setEmailerror] = useState(null);
    const [passworderror, setPassworderror] = useState(null);
    const [fullnameerror, setFullnameerror] = useState(null);
    const handleSubmit = (event) => {
        //Prevent the dafault form submission bahaviour to avoid page reload
        event.preventDefault();
        //validation
        if (email === "") {
            setEmailerror("Email is required");
            return;
        }
        if(password===""){
            setPassworderror("Password is required");
            return;
        }
        if(password.length<6){
            setPassworderror("Password must be atleast 6 character long");
            return;
        }
        if(fullname===""){
            setFullnameerror("fullname is required");
            return;
        }
        if(fullname.length<3){
            setFullnameerror("fullname must be atleast 3 character long" );
            return;
        }
        alert(`email:${email}\n password:${password}\n fullmame:${fullname}`)
        //reset form field
        setEmailerror(null);
        setPassworderror(null);
        setFullnameerror(null);
        setEmail("");
        setPassword("");
        setFullname("");
       
        
    }
    return (
        <div>
            <h4>Form Validation</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your valid email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailerror && <p style={{color:"red"}}>{emailerror}</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passworderror && <p style={{color:"red"}}>{passworderror}</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="fullname" placeholder="Enter your full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    {fullnameerror && <p style={{color:"red"}}>{fullnameerror}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormValidation