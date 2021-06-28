import {createStore ,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import reducer from './reducer'

export default createStore(rootReducer, 
    compose(
        applyMiddleware(thunk),
))
export let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())