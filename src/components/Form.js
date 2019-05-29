import React, { Component } from 'react'
import { Card, Button} from 'react-onsenui';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addTask } from '../actions'
import * as ons from 'onsenui';

class Form extends Component {

    state = {
        title:"",
        date: new Date(),
        description: "",
        checked: false,
        done: false
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

    addTask = () =>{
        if (!this.state.title || this.state.title.trim().length === 0) {
            ons.notification.alert("Please enter your task title.")
            return;
        }
        this.props.addTask(this.state);
        this.props.history.goBack();
    }

    render() {
        console.log(this.state.date);
        
        return (
            <Card style={{height:"100%"}}>
                <label><strong>Title: </strong></label>
                <input
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    type="text"
                    style={{width:"100%", marginTop:5, marginBottom:20}}
                />
                <label><strong>Date: </strong></label>
                <input
                    value={this.state.date}
                    onChange={this.handleDateChange }
                    type="date"
                    style={{width:"100%", marginTop:5, marginBottom:20}}
                />
                <label><strong>Description: </strong></label>
                <textarea
                    rows="10"
                    style={{width:"100%", marginTop:5, marginBottom:20, marginRight:3, fontSize:20}}
                    value={this.state.description}
                    onChange={this.handleDescChange}
                ></textarea>
                <Button className="add-button"  onClick={this.addTask}>
                    ADD
                </Button>
            </Card>
        )
    }
}

function mapStateToProps(){
    return {};
}

export default withRouter(connect(mapStateToProps, {addTask})(Form));
