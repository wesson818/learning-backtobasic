import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    console.log('ice cream props', props);
    return (
        <div>
            <h2>Number of ice cream - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

// step 1
const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

// step 2 
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
