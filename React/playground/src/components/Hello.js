// function component
import React from 'react';

const Hello = (props) => {
    const {name, heroName, children} = props
    return (
        <div className="dummyClass">
            <h1>Hello {name} {heroName}</h1>
            {children}
        </div>
    )
    // return React.createElement(
    //     'div',
    //     {id: 'hello', className: 'dummyClass'},
    //     React.createElement('h1', null, 'Hello World!!!')
    // )
}

export default Hello;
