import React, { useState } from 'react'

const initState = {
    fName: 'Kevin',
    lName: 'Zeo'
}

const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // person.fName = "Kate"
        // person.lName = "Wayne"
        // setPerson(person)

        // copy object person to newPerson
        const newPerson = {...person}
        newPerson.fName = 'Kate'
        newPerson.lName = 'Wayne'
        setPerson(newPerson)
    }

    console.log('Render ObjectUseState')

    return (
        <div>
            <div>{person.fName} {person.lName}</div>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default ObjectUseState

