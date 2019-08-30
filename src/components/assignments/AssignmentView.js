import React from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';

import GradeDisplay from './GradeDisplay';

import '../../styles/assignmentView.css';

class AssignmentView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const Button = withRouter(({ history }) => (
          <button
            type='button'
            onClick={() => history.push({
                pathname: `/edit`,
                state:{ id: this.props.id }

                }
            )}
          >
            Edit
          </button>
        ))
        const { title, descr, link, grade, id, admin, showGrades } = this.props;
        return showGrades ? (
                <div className="assignmentView-container">
                    <div className="assignmentView-title">{title}</div>
                    <div className="assignmentView-descr"> {descr}</div>
                    <div className="assignmentView-link">{link} </div>
                    <GradeDisplay grade={grade}/>
                    <Button id={id}/>

                    <button>Delete</button>
                </div>

        ) :
            <div className="assignmentView-container">
                <div className="assignmentView-title">{title}</div>
                <div className="assignmentView-descr"> {descr}</div>
                <div className="assignmentView-link">{link} </div>
                <div className="assignmentView-grade"> {grade} </div>
                <Button id={id}/>

                <button>Delete</button>
            </div>
    }
}

export default withRouter(AssignmentView);