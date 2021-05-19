import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {getDataReducer} from "./reducer";

const reducers = combineReducers({
    data: getDataReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export type RootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store