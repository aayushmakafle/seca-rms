import { Link, Outlet } from "react-router"

  
function App() {
  return(
    <>
    {/* navbar should be placed here */}
    <div>
      Navbar
      {/* link should be placed here only  */}
      <Link to={"/"}>Home</Link>
      <br/>
      <Link to={"/todo"}>TodoExample</Link>
      <br/>
      <Link to={"/user/73586285"}>User</Link>
      <br/>
    </div>
    <Outlet/>
    {/* footer should be placed here only */}
    <div>
      Footer
    </div>
    {/* all route config should be here  */}
    </>
  )
}
export default App