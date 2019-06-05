import * as ons from "onsenui";
const todo = {
    getTodos(){
        return new Promise((resolve, reject)=>{
            let tasks;
            try {
                tasks = JSON.parse(localStorage.getItem("todo-list"));
                resolve(tasks);
            } catch (error) {
                ons.notification.alert('Load data fail.\nReset data.')
                localStorage.setItem('todo-list', JSON.stringify([]));
                reject(error);
            }
            
        })
    },

    addTodo(newTodo, currentState){
        if (currentState.length !== 0) {
            newTodo.id = parseInt(currentState[currentState.length - 1].id) + 1;
        } else {
            newTodo.id = 1;
        }
        let newState = [
            ...currentState,
            newTodo
        ];
        localStorage.setItem('todo-list', JSON.stringify(newState));
        return newState;
    }
}

export default todo;