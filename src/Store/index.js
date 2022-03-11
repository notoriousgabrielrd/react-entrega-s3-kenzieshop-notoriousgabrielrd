import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"

import bookReducer from "./Modules/reducer"

const reducers = combineReducers({ bookList: bookReducer })

const store = createStore(reducers, applyMiddleware(thunk))

export default store