// useRef can hold a mutable var
import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const [timerStatus, setTimerStatus] = useState(true)
    const intervalRef = useRef()

    useEffect(() => {
        if (timerStatus) {
            intervalRef.current = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1)
            }, 1000)
            return () => {
                clearInterval(intervalRef.current)
            }
        }
    }, [timerStatus])

    const handleClearTimer = () => {
        clearInterval(intervalRef.current)
        setTimer(0)
        setTimerStatus(false)
    }

    const handleRestartTimer = () => {
        setTimerStatus(true)
    }

    return (
        <div>
          Hook Timer - {timer}  <br />
          {/* conditional rending */}
          {timerStatus ? 
          (<button onClick={handleClearTimer}>Clear Timer</button>) : 
          (<button onClick={handleRestartTimer}>Restart Timer</button>)
        }
        </div>
    )
}


export default HookTimer
