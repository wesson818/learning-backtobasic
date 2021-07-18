import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
    
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                {this.props.name}
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
