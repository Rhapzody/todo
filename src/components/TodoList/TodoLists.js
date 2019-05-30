import React from 'react'
import { List } from 'react-onsenui';
import TodoListHeader from './TodoListHeader';
import Task from './Task';
import { connect } from 'react-redux';

const TodoLists = (props) => (
    <List 
        dataSource={props.tasks}
        renderHeader={() => <TodoListHeader/>}
        renderRow={(task, idx) => {
            if (!task.done) {
                return <Task row={task} idx={idx} key={`todo-list-${task.id}` }/>
            }
        }}
        className="page-bg"
        style={{minHeight:"100%"}}
    />
)


function mapStateToProps({tasks}) {
    let sortrdTasks = [...tasks];
    sortrdTasks.sort((a,b)=>(a.date>b.date)?1:-1);
    return {tasks:sortrdTasks}
}

export default connect(mapStateToProps, {})(TodoLists);
