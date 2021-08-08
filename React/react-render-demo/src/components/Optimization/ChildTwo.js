import React from 'react'

export const ChildTwo = ({name}) => {

    console.log('Render ChildTwo')
    return (
        <div>
            Child Two Component {name}
        </div>
    )
}

export const MemoChildTwo = React.memo(ChildTwo)
