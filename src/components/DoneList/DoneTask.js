import React from 'react';
import { ListItem} from 'react-onsenui';

const DoneTask = (props) => (
    <ListItem modifier="nodivider" expandable={true} className="task-border">
        ({new Date(props.row.date).toLocaleString()}) {props.row.title} 
        <div className="expandable-content">
            <p>Task ID: {props.row.id}</p>
            <p>Task Title: {props.row.title}</p>
            <p>Task Description: {props.row.description}</p>
            <p>Date: {new Date(props.row.date).toLocaleString()}</p>
        </div>
    </ListItem>
)

export default DoneTask
