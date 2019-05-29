import React, { Component } from 'react'
import { Page } from 'react-onsenui';
import Toolbar from '../components/Toolbar';
import TodoLists from '../components/TodoList/TodoLists'
import {connect} from 'react-redux';
import {fetchAllTasks} from "../actions";

class Home extends Component {

    componentDidMount(){
        this.props.fetchAllTasks();
    }

    render() {
        console.log('Home');
        
        return (
            <Page renderToolbar={() => <Toolbar/> }
                modifier="transparent"
                className="page-bg"
            >
                <TodoLists/>
            </Page>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {
    fetchAllTasks
})(Home);
