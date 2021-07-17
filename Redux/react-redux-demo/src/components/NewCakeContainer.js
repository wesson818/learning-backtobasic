import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

// step 1
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// step 2 
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)
