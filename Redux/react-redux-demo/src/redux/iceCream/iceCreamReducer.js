const { BUY_ICECREAM } = require("./iceCreamType");

const initialState = {
    numOfIceCream: 5
};

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        };
        default: return state;
    }
};

export default iceCreamReducer;