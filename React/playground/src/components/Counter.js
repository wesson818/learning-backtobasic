// class component
import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('callback this.state.count', this.state.count)
        })
    }

    decrement() {
        this.setState((prevState, props) => ({
            count: prevState.count - 1
        }))
    }

    // doesn't work, because increment doesn't from prevState
    increment2() {
        this.increment()
        this.increment()
    }

    decrement2() {
        this.decrement()
        this.decrement()
    }

    render() {
        return (
            <>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
                <button onClick={() => this.increment2()}>Increment 2</button>
                <button onClick={() => this.decrement2()}>Decrement 2</button>
            </>
        )
    }
}

export default Counter
