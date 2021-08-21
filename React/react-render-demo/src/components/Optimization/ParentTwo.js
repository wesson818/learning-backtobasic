import React, { useState, useMemo, useCallback } from 'react'
import { MemoChildTwo } from './ChildTwo';

const ParentTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('aName')
    console.log("Render ParentTwo")

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memoizedPerson = useMemo(() => person, []);

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick, [])

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={()=>setName('newName')}>Change Name</button>
            {/* <MemoChildTwo name={name} person={memoizedPerson} /> */}
            <MemoChildTwo name={name} handleClick={memoizedHandleClick} />
        </div>
    )
}

export default ParentTwo
