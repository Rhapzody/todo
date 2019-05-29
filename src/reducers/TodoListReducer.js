import * as type from '../actions/type';
export default function(state = [], action) {
    switch (action.type) {
        case type.LOAD_ALL_TASKS:
            return [...action.payload];

        case type.ADD_NEW_TASK:
            let newTodo = action.todo;
            if (state.length !== 0) {
                newTodo.id = parseInt(state[state.length - 1].id) + 1;
            } else {
                newTodo.id = 1;
            }
            let newState = [
                ...state,
                newTodo
            ];
            localStorage.setItem('todo-list', JSON.stringify(newState));
            return newState;

        case type.CHECK_TASK:
            let findTodo = state.find((todo)=>{
                return todo.id === action.todo.id;
            });
            findTodo.checked = findTodo.checked?false:true;
            localStorage.setItem('todo-list', JSON.stringify(state));
            return [...state];

        case type.DONE_TASKS:
            state.forEach(task=>{
                if (task.checked === true && task.done === false) {
                    task.done = true;
                }
            });
            localStorage.setItem('todo-list', JSON.stringify(state));
            return [...state];

        case type.DELETE_TASK:
            let restTasks = state.filter(task=>{
                return action.todo.id !== task.id;
            });
            localStorage.setItem('todo-list', JSON.stringify(restTasks));
            return restTasks;

        default:
            return state
    }
}