import React, { useState } from 'react'

const ParentOne = ({children}) => {
    const [count, setCount] = useState(0);
    console.log("Render ParentOne")

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(c => c + 1)}>Count - {count}</button>
            {children}
        </div>
    )
}

export default ParentOne
