import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'

export const CustomHookCounterTwo = () => {
    const [count, increment, decrement, reset] = useCounter()

    return (
        <div>
            <span>-------------Custom hook useCounter-----------</span>
            <br />
            <button onClick={decrement}>&nbsp; - &nbsp;</button>
            &nbsp; {count} &nbsp;
            <button onClick={increment}>&nbsp; + &nbsp;</button>
            <br />
            <button onClick={reset}>Reset</button>
            <br />
            <span>-----------------------------------------------</span>
        </div>
    )
}
