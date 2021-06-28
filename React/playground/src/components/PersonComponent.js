import React from 'react'

function PersonComponent({person}) {
    return (
        <div>
            {/* try use id as the key */}
            {/* when use index as key need has below requirement */}
            {/* 1. The items in your list do not have a unique id */}
            {/* 2. The list is static list and will not change */}
            {/* 3. The list will never be reordered or filtered */}
            <h2 key={person.id}>
                I am {person.name} and I am {person.age} years old. I know {person.skill}.
            </h2>
        </div>
    )
}

export default PersonComponent
