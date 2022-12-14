import React, { useRef } from 'react'

const RefComponent = () => {
    const inputRef = useRef()

    const checkRef = () => {
        alert(`Your input has the string: ${inputRef.current.value}`)
        //Reset input field to be empty
        inputRef.current.value = ''
        // Reset cursor to be in input field
        inputRef.current.focus()
    }

    return (
        <div className="card">
            <h2>useRef</h2>
            <input type="text" ref={inputRef} />
            <button onClick={checkRef}>What's my ref?</button>
        </div>
    )
}

export default RefComponent