// class component
import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        })
    }

    render() {
        const {message} = this.state
        return (
            <>
                <h1>{message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}

export default Message
