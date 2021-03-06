import * as type from '../actions/type';

export default function(state = [], action) {
    switch (action.type) {
        //load all task
        case type.LOAD_ALL_TASKS:
            return [...action.payload];

        //add new task
        case type.ADD_NEW_TASK:
            return [...action.payload];

        //mask task
        case type.CHECK_TASK:
            let findTodo = state.find((todo)=>{
                return todo.id === action.todo.id;
            });
            findTodo.checked = findTodo.checked?false:true;
            localStorage.setItem('todo-list', JSON.stringify(state));
            return [...state];

        //done task
        case type.DONE_TASKS:
            state.forEach(task=>{
                if (task.checked === true && task.done === false) {
                    task.done = true;
                }
            });
            localStorage.setItem('todo-list', JSON.stringify(state));
            return [...state];

        //delete task
        case type.DELETE_TASK:
            let restTasks = state.filter(task=>{
                return action.todo.id !== task.id;
            });
            localStorage.setItem('todo-list', JSON.stringify(restTasks));
            return restTasks;

        //edit task
        case type.EDIT_TASK:
            let find = state.find(task=>{
                return action.todo.id === task.id;
            });
            find.date = action.todo.date;
            find.title = action.todo.title;
            find.description = action.todo.description;
            find.checked = action.todo.checked;
            find.done = action.todo.done;
            localStorage.setItem('todo-list', JSON.stringify(state));
            return [...state];
        default:
            return state
    }
}