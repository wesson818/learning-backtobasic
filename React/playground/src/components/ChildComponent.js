import React from 'react'

function ChildComponent(props) {
    console.log('ChildComponent render')
    return (
        <div>
            {props.name}
            <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
