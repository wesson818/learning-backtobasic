import React, {Component} from 'react';

class ClassClick extends Component {
    clickHandler() {
        console.log('class clickHandler: click the button')
    }

    render() {
        return(
            <div>
                <button onClick={this.clickHandler}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick;
