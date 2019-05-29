import React from 'react'
import { List } from 'react-onsenui';
import { connect } from 'react-redux';
import DoneTask from './DoneTask';

const DoneLists = (props) =>  (
    <List 
        dataSource={props.tasks.reverse()}
        renderHeader={() => <div></div>}
        renderRow={(task, idx) => {
            if (task.done) {
                return <DoneTask row={task} idx={idx} key={`done-list-${task.id}` }/>
            }
        }}
        className="page-bg"
        style={{minHeight:"100%"}}
    />
)

function mapStateToProps({tasks}) {
    return {tasks}
}

export default connect(mapStateToProps, {})(DoneLists);
