const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Action & action creator
const BUY_CAKE = 'BUY_CAKE'
const Buy_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type : BUY_CAKE,
        info : 'first redux action'
    }
}

function buyIceCream() {
    return {
        type : Buy_ICECREAM,
    }
}
//initial state
const initialCakeState = {
    numberOfCakes : 15
}
const initialIceCreamState = {
    numberOfIceCreams : 20
}

 // reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case Buy_ICECREAM: return {
            ...state,
            numberOfIceCreams : state.numberOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()