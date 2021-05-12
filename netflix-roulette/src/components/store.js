import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const getStore = (initialState = {}) => createStore(rootReducer, initialState, applyMiddleware(thunk));

export default getStore;
