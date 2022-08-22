import {configureStore} from "@reduxjs/toolkit";
import anecdoteReducer from "../reducers/anecdoteReducer";
import {combineReducers} from "redux";
import notificationReducer from "../reducers/notificationReducer";

const combined = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
})
const store = configureStore({
    reducer: combined
})



export default store