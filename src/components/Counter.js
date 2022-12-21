import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <article>
            <button onClick={() => { setCounter(counter - 1) }} className="border border-solid border-black p-4 m-2">-</button>
            <span>{counter}</span>
            <button onClick={() => { setCounter(counter + 1) }} className="border border-solid border-black p-4 m-2">+</button>
        </article>
    )
}

export default Counter;