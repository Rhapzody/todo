import React, { Component } from 'react';
import { Card, Button} from 'react-onsenui';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addTask, editTask } from '../actions';
import * as ons from 'onsenui';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:"",
            date: this.formatDateTime(new Date()),
            description: "",
            checked: false,
            done: false
        }
    }

    componentDidMount(){
        if (this.props.type==='edit') {
            let taskToEdit = this.props.tasks.find(task=>{
                return task.id === parseInt(this.props.match.params.id);
            })
            this.setState(taskToEdit);
        }
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleDateChange = (e) => {
        this.setState({date: e.target.value})
    }

    handleDescChange = (e) => {
        this.setState({description: e.target.value})
    }

    submitForm = () => {
        if (!this.state.title || this.state.title.trim().length === 0) {
            ons.notification.alert("Please enter your task title.")
            return;
        }
        if (this.props.type === 'add') {
            this.props.addTask(this.state);
        } else {
            this.props.editTask(this.state);
        }
        this.props.history.goBack();
    }

    formatDateTime = (datetime) => {
        return `${this.zeroPadding(datetime.getFullYear(), 4)}-`+
            `${this.zeroPadding(datetime.getMonth()+1,2)}-`+
            `${this.zeroPadding(datetime.getDate(),2)}T`+
            `${this.zeroPadding(datetime.getHours(),2)}:`+
            `${this.zeroPadding(datetime.getMinutes(),2)}`;
    }

    zeroPadding = (number, size) => {
        var s = String(number);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }

    render() {
        
        return (
            <Card style={{height:"100%"}}>
                <label><strong>Title: </strong></label>
                <input
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    type="text"
                    style={{width:"100%", marginTop:5, marginBottom:20}}
                />

                <label><strong>Date - Time: </strong></label>
                <input
                    value={this.state.date}
                    onChange={this.handleDateChange }
                    type="datetime-local"
                    style={{width:"100%", marginTop:5, marginBottom:20}}
                />

                <label><strong>Description: </strong></label>
                <textarea
                    rows="10"
                    style={{width:"100%", marginTop:5, marginBottom:20, marginRight:3, fontSize:20}}
                    value={this.state.description}
                    onChange={this.handleDescChange}
                ></textarea>
                
                <Button
                    className="add-button"
                    onClick={this.submitForm}
                >
                    {this.props.type === 'add'?'Add':'Edit'}
                </Button>
            </Card>
        )
    }
}

function mapStateToProps({tasks}){
    return {tasks};
}

export default withRouter(connect(mapStateToProps, {addTask, editTask})(Form));
