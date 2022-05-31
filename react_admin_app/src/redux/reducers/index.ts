import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {AuthReducer, AuthReducerState} from './AuthReducer'
import thunk from 'redux-thunk'

export interface RootReducerState {
    authReducer: AuthReducerState;
}

export const rootReducer = combineReducers({
    authReducer: AuthReducer
});

const composeEnhancers = compose;
export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);