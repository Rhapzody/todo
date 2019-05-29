import { combineReducers } from 'redux';
import todoListReducer from "./TodoListReducer";

export default combineReducers({tasks:todoListReducer});