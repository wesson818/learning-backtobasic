import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(10, 2)

    return (
        <div>
            <button onClick={decrement}>&nbsp; - &nbsp;</button>
            &nbsp; {count} &nbsp;
            <button onClick={increment}>&nbsp; + &nbsp;</button>
            <br />
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
