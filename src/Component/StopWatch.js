import React, { useRef, useState } from 'react'

function StopWatch() {

    const [time, setTimeValue] = useState(0)

    let inputRef = useRef(null)

    const handleStart = () => {

        if (!inputRef.current) {
            inputRef.current = setInterval(() => {
                setTimeValue((time) => time + 1)
            }, 1000
            )
        }
    }
    const stopWatch = () => {

        clearInterval(inputRef.current)
        inputRef.current = null
    }
    const resetWatch = () => {

        clearInterval(inputRef.current)
        inputRef.current = null
        setTimeValue(0)
    }
    return (
        <div>StopWatch
            {time}
            <div>
                <button onClick={() => handleStart()}>Start</button>
                <button onClick={stopWatch}>Stop</button>
                <button onClick={resetWatch}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch