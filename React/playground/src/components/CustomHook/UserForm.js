import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'

export const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <span>-------------Custom Hook useInput-------------</span>
            <form onSubmit={submitHandler}>
                <label>First Name: </label>
                <input 
                    type='text' 
                    {...bindFirstName}
                />
                <br />
                <label>Last Name: </label>
                <input 
                    type='text' 
                    {...bindLastName}
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
            <span>-------------------------------------</span>
        </div>
    )
}
