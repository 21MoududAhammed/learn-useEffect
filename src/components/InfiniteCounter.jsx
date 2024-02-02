import { useEffect, useState } from "react";

export default function InfiniteCounter(){
    const [count, setCount] = useState(0);
    // it will run for the first render 
    useEffect(()=>{
        // setCount will change the state for this reason it will render again 
        setCount(count + 1);
    })
    return (
        <h1>Result: {count}</h1>
    );
}