import {useState} from "react";


export const TestButton = () => <button>{"Buy"}</button>

export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(c => c + 1)
    const decrement = () => setCount(c => c - 1)

    return (
        <div>
            <div>Current count: {count}</div>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )

}


