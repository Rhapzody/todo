import React, { Component } from 'react'
import {Toolbar, Page, Icon} from 'react-onsenui';
import { withRouter } from 'react-router-dom';
import DoneLists from '../components/DoneList/DoneLists'

class DoneTaskPage extends Component {
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
                    <div className="right">
                    </div>
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

export default withRouter(DoneTaskPage);
