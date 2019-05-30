import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Form from '../components/Form'
import {Toolbar, Page, Icon} from 'react-onsenui';

class EditTaskPage extends Component {
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
                        Edit TODO List
                    </div>

                    <div className="right"></div>

                </Toolbar>
            )}>

                <Form type="edit"/>
                
            </Page>
        )
    }

    popPage = () => {
        this.props.history.goBack();
    }
}

export default withRouter(EditTaskPage);