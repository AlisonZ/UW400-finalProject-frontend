import React from 'react';

import '../../styles/assignmentView.css';

class AssignmentView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { title, descr, link, grade } = this.props;
        return (
            <div className="assignmentView-container">
                <div className="assignmentView-title">{title}</div>
                <div className="assignmentView-descr"> {descr}</div>
                <div className="assignmentView-link">{link} </div>
                <div className="assignmentView-grade"> {grade} </div>
            </div>
        )
    }
}

export default AssignmentView;