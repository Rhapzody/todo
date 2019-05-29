import * as type from './type';

export const fetchAllTasks = () => {
    let payload = JSON.parse(localStorage.getItem("todo-list"));
    return {type: type.LOAD_ALL_TASKS, payload};
}

export const addTask = (todo) => {
    return {type: type.ADD_NEW_TASK, todo};
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