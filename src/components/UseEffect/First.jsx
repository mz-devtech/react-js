import { useEffect, useState } from "react"

export const First = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("this is my first useeffect Run Everytime after Component re-runder");

    }, [])

    useEffect(() => {
        console.log("With Dependencies run once");

    }, [])


    useEffect(() => {
        console.log("run when we pass any functionality");
        
    },[count])

    return (
        <>
            <h1>Simple Use Effect</h1>

            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>




        </>
    )
}
