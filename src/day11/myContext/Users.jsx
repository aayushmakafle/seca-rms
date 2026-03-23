import { useContext, useState } from "react"
import { MyContext } from "./my_context"

const CompA = () => {
    const [apple, setApple] = useState("Apple")
    return (
        <div>
            <h1>Comp A</h1>
            {/* context provider to hold the data */}
            <MyContext.Provider value={apple}>
                <CompB />
            </MyContext.Provider>
        </div>
    )
}
export default CompA
const CompB = () => {
        let data = useContext(MyContext)

    return (
        <div>
            <h1>Comp B</h1>
            <p>{data}</p>
            <CompC />
        </div>
    )
}
const CompC = () => {
    let data = useContext(MyContext)
    return (
        <div>
            <h1>Comp C</h1>
            <p>{data}</p>
        </div>
    )
}

//createContext:vada banaune
//useContext:use garne