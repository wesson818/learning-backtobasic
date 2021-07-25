import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('call logMousePosition')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('called HookMouse useEffect')
        window.addEventListener("mousemove", logMousePosition)

        return () => {
            console.log('Component unmount') // equals componentWillUnmount under class component
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
    return (
        <div>
            Hook Mouse X-{x} Y-{y}
        </div>
    )
}

export default HookMouse
