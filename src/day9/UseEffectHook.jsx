import { useEffect, useState } from "react"

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    //no dependency array -runs on every render
    useEffect(
        () => {
            console.log("useEffect called on every render");
        },
    )
    //empty dependency array-runs only on initial render
    useEffect(
        () => {
            console.log("useEffect called on initial render");
        },
        []
    )
    //with dependency array-runs only when count changes
    useEffect(
        () => {
            console.log("useEffect called with dependency array");
        },
        [count]
    )
    // useEffect(
    //     () => {
    // const proTask=()=>{
    //     for(let i=0;i<100000;i++){
    //     console.log("proTask running:", i);
    // }
    //         console.log("proTask completed")
    //     }
    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json))
        },
        []
    )
    const calculate=()=>{
        let sum=50;
        sum+=count;
        return sum;
    }
    useEffect(
        ()=>{
            let res=calculate();
            console.log("Calculated result:",res);
        },
        [count]
    )

    return (
        <div>
            <h3>UseEffect Hook Example</h3>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default UseEffectHook