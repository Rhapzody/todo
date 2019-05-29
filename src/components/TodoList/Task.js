import React from 'react';
import { ListItem, Checkbox} from 'react-onsenui';
import * as ons from 'onsenui';
import { connect } from 'react-redux';
import { deleteTask, editTask, checkTask} from '../../actions'

const Task = (props) => (
    <ListItem modifier="nodivider" tappable className="task-border">
        <div className="left">
            <Checkbox
                onChange={()=>props.checkTask(props.row)}
                modifier='material'
                checked={props.row.checked}
            />
        </div>
        <div className="center" onClick={()=>showActionSheet(props)}>
            {props.row.title}
        </div>
        <div className="right" onClick={()=>showActionSheet(props)}>
            <span style={{fontSize:12}}>{new Date(props.row.date).toLocaleString()}</span>
        </div>
    </ListItem>
)


const showActionSheet = (props) => {
    let todo = props.row;
    ons.openActionSheet({
        cancelable: true,
        title: todo.title,
        buttons: ['View','Edit','Delete', 'Cancle'],
    }).then((key)=>{
        switch (key) {
            case 0:
                console.log('View');
                showTaskDetail(props);
                break;
            case 1:
                console.log('Edit');
                props.editTask(todo);
                break;
            case 2:
                console.log('Delete');
                ons.notification.confirm("Confirm Delete Task").then(confirm=>{
                    if (confirm) {
                        props.deleteTask(todo);
                    } 
                }).catch(err=>ons.notification.alert(err.message));
                break;
            default:
                break;
        }
    }).catch(err=>console.log(err));
}

const showTaskDetail = (props) => {
    ons.notification.alert({
        messageHTML:`
            <p>Title: ${props.row.title}</p>
            <p>Description: ${props.row.description}</p>
            <p>Date: ${new Date(props.row.date).toLocaleString()}</p>
        `,
        title:`Task ID: ${props.row.id}`
    })
}



function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {deleteTask, editTask, checkTask})(Task);
