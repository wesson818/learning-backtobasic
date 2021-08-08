// A store that holds the state of your application.
// An action that describes the changes in the state of the application
// A reducer which actually carries out the state transition depending on the action

const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

console.log('From Redux Demo index.js');

// action
const BUY_CAKE = 'BUY_CAKE',
      BUY_ICE_CREAM = 'BUY_ICE_CREAM';

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
// Responsibilities:
// - holds application state
// - allows access to state via getState()
// - allow state to be updated via dispatch (action)
// registers listeners via subscribe (listener)
// handles un-registering of listeners via the function returned by subscribe (listener)
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

