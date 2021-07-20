import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    // replace life cycle method: componentDidMount(), componentDidUpdate() and componentWillUnmount
    // useEffect hook lets you perform side effects in function components. it runs after every render
    useEffect(() => {
        console.log('useEffect - updating')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e=>{
                setName(e.target.value)
            }} />
            <button onClick={() => setCount(count + 1)}>Hook 1: Click {count} times</button>            
        </div>
    )
}

export default HookCounterOne
