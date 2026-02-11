import { Link, Outlet } from "react-router"
import "./App.css"
import Footer from "./components/Footer"
let App=()=>{
  return(
    <div>
      <div className="navbar">
        
          <h4>
            <Link to={"/"}>Home</Link>
          </h4>
          <h4>
            <Link to={"/login"}>Login</Link>
          </h4>
          <h4>
            <Link to={"/register"}>Register</Link>
          </h4>
        </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}
export default App