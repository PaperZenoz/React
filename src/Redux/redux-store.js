import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import messageReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
import humansReducer from "./humans-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    humansPage: humansReducer,
    app: appReducer,
    auth: authReducer,
    form: formReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store

export default store;