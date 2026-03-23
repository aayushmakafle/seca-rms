import { useMemo, useState } from "react";

const expensiveCalculation=(num)=>{
    for(let i=0;i<100000;i++){
        num+=1;
    }
    return num;
}
const UseMemoComponent=()=>{
    console.log("UserMemoComponent rendered")
    const [count,setCount]=useState(0);
    //using useMemo to memorize the result of expensive calculation
    let result=useMemo(
        ()=>{
            return expensiveCalculation(count)
        },
        [count]
    );
    const [toggle,setToggle]=useState(false)
    return(
        <div>
            <h1>use memo hook example</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>Expensive Calculation:{result}</p>
            <h3>Toggled</h3>
            <p>{toggle?"Toggle on":"Toggle off"}</p>
            <button onClick={()=>setToggle(!toggle)}>toggle</button>
        </div>
    )
}
export default UseMemoComponent