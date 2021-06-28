import React, { Component } from 'react'

class LifecycB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Peter'
        }

        console.log('LifecycB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    // most used lifecycle method
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }
    
    // most used lifecycle method
    render() {
        console.log('LifecycB render')
        return (
            <React.Fragment>
                <h1>Heading</h1>
                <p>Paragraph</p>
            </React.Fragment>
        )
    }
}

export default LifecycB
