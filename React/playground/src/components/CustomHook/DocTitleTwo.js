import React, { useState } from 'react'
import { useDocTitle } from '../../hooks/useDocTitle'

export const DocTitleTwo = () => {
    const [count, setCount] = useState(0)

    // Custom Hook
    useDocTitle(count)

    return (
        <div>
            <span>-----------Custom Hook----------------</span>
            <br />
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <br />
            <span>---------------------------------------</span>
        </div>
    )
}
