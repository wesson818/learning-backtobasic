import React, { useState } from 'react'
import { MemoChildTwo } from './ChildTwo';

const ParentTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('aName')
    console.log("Render ParentTwo")

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={()=>setName('newName')}>Change Name</button>
            <MemoChildTwo name={name} />
        </div>
    )
}

export default ParentTwo
