import React, { useState } from 'react'
// import { MemoizedChildA } from './ContextChildren'

// *** to optimize the rendering, using React.memo or children element
export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {
    console.log('ContextParent Render')

    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
            <CountProvider value={count}>
                {/* <MemoizedChildA /> */}
                {children}
            </CountProvider>
        </>
    )
}
