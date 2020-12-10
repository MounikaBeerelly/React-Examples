import { BUY_ICECREAM } from './IcecreamTypes.js';

const initialState = {
    numberOfIcecreams : 25
}

const iceCreamReducer = (state= initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM :
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams -1
            }
        default : return state
    }
}
export default iceCreamReducer;