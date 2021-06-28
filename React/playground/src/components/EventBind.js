import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello click"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye click"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "Goodbye click"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* first way: bind this in onClick */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* second way: => function in onClick */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* third way: this.clickHandler.bind(this) in constructor */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* fourth way(suggested): => function in clickHandler function */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
