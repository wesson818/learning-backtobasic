import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         parentName: 'Peter'
        //     })
        // })
    }

    greetParent = (childName) => {
        alert(`Hi ${this.state.parentName} from ${childName}`)
    }

    render() {
        console.log('**************ParentComponent render*****************')

        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} name={this.state.parentName} />
                <PureComp name={this.state.parentName} />
                <MemoComp name={this.state.parentName} />
            </div>
        )
    }
}

export default ParentComponent
