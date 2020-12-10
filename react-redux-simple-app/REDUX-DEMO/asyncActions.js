const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios');

//Initial State
const initialState = {
    loading : true,
    data : [],
    error : ''
}
// Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_sUCCESS = 'FETCH_USERS-SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS-FAILURE'
// Action Creators
const fetchUsersRequest = () => {
    return  {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type : FETCH_USERS_sUCCESS,
        payload : users
    }
}

const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}
//REducer
const reducer =  (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
            case FETCH_USERS_sUCCESS:
                return {
                    loading : false,
                    users : action.payload,
                    error : ''
                }
            case FETCH_USERS_FAILURE:
                return {
                    loading: false,
                    users : [],
                    error : action.payload
                }
    }
}
//Fetch data
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
              //response.data
              const users= response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.messge
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

// Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() =>{ console.log(store.getState())})
store.dispatch(fetchUsers());

