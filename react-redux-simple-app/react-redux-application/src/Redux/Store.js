import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)) )

export default store;