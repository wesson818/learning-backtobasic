const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

console.log('From Redux Demo index.js');

const BUY_CAKE = 'BUY_CAKE',
      BUY_ICE_CREAM = 'BUY_ICE_CREAM';

// action
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
};

const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM,
        info: 'Second redux action'
    };
};

// (previousState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 5
// };

const initialCakesState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCreams: 5
};

// reducer

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         };

//         case BUY_ICE_CREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         };

//         default: return state;
//     }
// };

const cakeReducer = (state = initialCakesState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        };

        default: return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        };

        default: return state;
    }
};

// const store = createStore(reducer);
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));
// store.getState()
console.log('Initial state', store.getState());
// const unsubscribe = store.subscribe(()=> console.log('Update state', store.getState()));
const unsubscribe = store.subscribe(()=> {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

unsubscribe();

