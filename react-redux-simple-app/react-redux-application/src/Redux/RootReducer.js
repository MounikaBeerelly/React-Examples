import { combineReducers } from 'redux';
import cakeReducer from './Cakes/CakeReducer';
import iceCreamReducer from './IceCream/IcecreamReducer';

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

export default rootReducer ;
