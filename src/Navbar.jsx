import { useContext, useState } from "react"


import { MyContext } from "./day11/myContext/my_context"
import Home from "./pages/Home"

const Navbar = () => {
    const [themes, setTheme] = useState("light")
    const toggle = () => {
        setTheme(themes === "light" ? "dark" : "light");
    }
    return (
        <div style={{
            padding: "20px"
        }}>
            <h1>Navbar</h1>
            <button onClick={toggle}>Toggle Theme {themes === "light" ? "Dark" : "Light"}</button>
            <MyContext.Provider value={themes}>
                <Home/>
            </MyContext.Provider>
        </div>
    )
}

export default Navbar