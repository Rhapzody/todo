import * as type from './type';
import todoService from '../services/todo-service';

export const fetchAllTasks = () => {
    return (dispatch)=>{
        todoService.getTodos().then(tasks=>{
            dispatch({type: type.LOAD_ALL_TASKS, payload:tasks});
        }).catch((err)=>{
            console.log(err);
            dispatch({type: type.LOAD_ALL_TASKS, payload:[]});
        })
    }
}

export const addTask = (todo) => {
    return (dispatch, getState) => {
        const { tasks: currentState } = getState();
        const newState = todoService.addTodo(todo, currentState);
        dispatch({type: type.ADD_NEW_TASK, payload: newState});
    }
}

export const deleteTask = (todo) => {
    return {type: type.DELETE_TASK, todo}
}

export const editTask = (todo) => {
    return {type: type.EDIT_TASK, todo}
}

export const checkTask = (todo) => {
    return {type: type.CHECK_TASK, todo}
}

export const doneTasks = () => {
    return {type: type.DONE_TASKS}
}