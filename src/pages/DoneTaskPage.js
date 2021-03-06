import React, { Component } from 'react'
import {Toolbar, Page, Icon} from 'react-onsenui';
import { withRouter } from 'react-router-dom';
import DoneLists from '../components/DoneList/DoneLists'
import {connect} from 'react-redux';
import {fetchAllTasks} from "../actions";

class DoneTaskPage extends Component {

    componentDidMount(){
        this.props.fetchAllTasks();
    }

    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar className="bar">

                    <div className="left">
                        <button onClick={this.popPage} className="text-white plus-button">
                            <Icon icon="md-arrow-back" size={{default:30}} />
                        </button>
                    </div>

                    <div className="center text-white" style={{textAlign:"center"}}>
                        Done Task Lists
                    </div>

                    <div className="right"></div>
                    
                </Toolbar>
            )}>

                <DoneLists/>

            </Page>
        )
    }

    popPage = () => {
        this.props.history.goBack();
    }
}

function mapStateToProps(){
    return {}
}

export default withRouter(connect(mapStateToProps, {
    fetchAllTasks
})(DoneTaskPage));
