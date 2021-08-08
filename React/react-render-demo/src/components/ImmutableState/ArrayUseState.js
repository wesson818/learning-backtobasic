import React, {useState} from 'react'

const initialState = ['Ab','Bill','Clark']

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initialState)

    const addPerson = () => {
        // copy persons in newPersons
        const newPersons = [...persons];
        newPersons.push('Debby')
        setPersons(newPersons)
    }

    return (
        <div>
            <button onClick={addPerson}>Add Person</button>
            {persons.map(person => (
               <div key={person}>
                   {person}
               </div> 
            ))}
        </div>
    )
}

export default ArrayUseState
