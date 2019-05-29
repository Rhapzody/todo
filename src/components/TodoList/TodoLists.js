import React from 'react'
import { List } from 'react-onsenui';
import TodoListHeader from './TodoListHeader';
import Task from './Task';
import { connect } from 'react-redux';
import { addTask } from "../../actions";

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
        style={{
            minHeight:"100%"
        }}
    />
)


function mapStateToProps({tasks}) {
    return {tasks}
}

export default connect(mapStateToProps, {
    addTask
})(TodoLists);
