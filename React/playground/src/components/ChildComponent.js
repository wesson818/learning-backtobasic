import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ChildComponent extends Component {
    render() {
        return (
            // <UserConsumer>
            //     {
            //         username => {
            //         return (
                        <div>
                            {this.props.name}
                            {/* {username} */}
                            <button onClick={() => this.props.greetHandler("child")}>Greet Parent</button>
                        </div>
            //         )}
            //     }
            // </UserConsumer>
        )
    }
}

export default ChildComponent
