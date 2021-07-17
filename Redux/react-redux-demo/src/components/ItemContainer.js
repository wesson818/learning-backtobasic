import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>We have {props.item} {props.name} in store</h2>
            <button onClick={props.buyItem}>Buy {props.name}</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemName = ownProps.cake 
        ? "cake"
        : "ice cream";
    const itemState = ownProps.cake 
        ? state.cake.numOfCakes 
        : state.iceCream.numOfIceCream;
    return {
        name: itemName,
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream());
    return {
        buyItem: dispatchFunction
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)
