import React from 'react'
import PersonComponent from './PersonComponent'

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Clark",
            age: 35,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Diana",
            age: 20,
            skill: "Vue"
        },
    ]
    const personList = persons.map(person => (
        <PersonComponent person={person} />
    ))
    return <div>{personList}</div>
}

export default NameList
