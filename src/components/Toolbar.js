import React from 'react';
import {withRouter} from 'react-router-dom';
import {Toolbar as Bar, Icon} from 'react-onsenui';
import { connect } from 'react-redux';
import { doneTasks } from '../actions';
import * as ons from 'onsenui';

const Toolbar = (props) => (
    <Bar style={{backgroundColor:"#6759FF", color:"white"}}>

        <div className="left">
            <button 
                onClick={()=>openAddToDoPage(props)}
                className="plus-button">
                <Icon icon="md-plus" size={{default:30}} />
            </button>
        </div>

        <div 
            className="center"
            style={{textAlign:"center", color:"white"}} >
            Reminders
        </div>

        <div className="right">
            <button 
                modifier="ligth quiet"
                onClick={()=>doneTaskHandler(props)}
                className="done-button">
                Done
            </button>
        </div>
        
    </Bar>
)
   
const openAddToDoPage = (props) => {
    props.history.push({
        pathname:"/add"
    });
}

const doneTaskHandler = (props) => {
    let toDoneTasks = props.tasks.filter(task=>{
        return (task.checked === true && task.done === false);
    })
    
    if (toDoneTasks.length === 0) {
        ons.notification.alert("Please Select Some Tasks");
        return;
    }
    ons.notification.confirm("Confirm Done Task").then(confirm=>{
        if (confirm) {
            props.doneTasks();
        } 
    }).catch(err=>ons.notification.alert(err.message));
}


function mapStateToProps({tasks}){
    return {tasks}
}

export default withRouter(connect(mapStateToProps, {doneTasks})(Toolbar));
