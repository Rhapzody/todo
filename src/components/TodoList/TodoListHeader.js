import React from 'react'
import { ListItem } from 'react-onsenui';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const TodoListHeader = (props) => {
    let completeTodoLists = props.tasks.filter((task)=>{
        return task.done;
    })
    return (
        <div className="list-header">
            <ListItem modifier="chevron" tappable onClick={()=>props.history.push('/done')}>
            <div className="left text-white">
                {completeTodoLists.length}
            </div>
            <div className="center text-white">
                Tasks Completed
            </div>
            <div className="right">
            </div>
        </ListItem>
        </div>
    )
}

function mapStateToProps({tasks}) {
    return {tasks};
}

export default withRouter(connect(mapStateToProps,{})(TodoListHeader));