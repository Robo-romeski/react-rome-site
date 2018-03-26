import { createStore, combineReducers } from 'redux';
import transitionReducer from './reducers/transitionReducer.js';

const allReducers = combineReducers({
transition: transitionReducer
})

const store = createStore(
    allReducers, 
    {
        transition: false,
    },
    window.devToolsExtension && window.devToolsExtension()
)
export default store;