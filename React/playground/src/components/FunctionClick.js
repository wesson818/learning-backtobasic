import React from 'react';

function FunctionClick() {
    function clickHandler() {
        console.log('function clickHandler: click the button')
    }
    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    )
}

export default FunctionClick
