import React from 'react'

export const Person = ({person}) => {
    return (
        <div className="card">
            <h3>{person.name}</h3>
            <p>Height - {person.height}</p>
            <p>Eye color - {person.eye_color}</p>
        </div>
    )
}
