import React from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';

import GradeDisplay from './GradeDisplay';

import * as assignments from '../../api/assignments';

import '../../styles/inputFields.css';



import '../../styles/assignmentView.css';

class AssignmentView extends React.Component {
    constructor(props) {
        super(props);
//        this.deleteAssign = this.deleteAssign.bind(this);
    }


    async deleteAssign(id) {
//            await history.push({
//                pathname: `/`,
//                state:{ id: this.props.id }
//                })
//        //const response = await assignments.deleteAssignment(this.state);
        const response = await assignments.deleteAssignment(id);
    }


    render(){
        const EditButton = withRouter(({ history }) => (
          <button
            type='button'
            onClick={() => history.push({
                pathname: `/edit`,
                state:{ id: this.props.id }

                }
            )}
            className="assignmentView-button"
          >
            Edit
          </button>
        ));


        const { title, descr, link, grade, id, admin, showGrades } = this.props;

        return showGrades ? (
                <div className="assignmentView-container">
                    <div className="assignmentView-title">{title}</div>
                    <div className="assignmentView-descr"> {descr}</div>
                    <div className="assignmentView-link">{link} </div>
                    <GradeDisplay grade={grade}/>
                    <EditButton id={id}/>

                    <button className="assignmentView-button">Delete</button>
                </div>

        ) :
            <div className="assignmentView-container">
                <div className="assignmentView-title">{title}</div>
                <div className="assignmentView-descr"> {descr}</div>
                <div className="assignmentView-link">{link} </div>
                <div className="assignmentView-grade"> {grade} </div>
                <EditButton id={id}/>

                <button
                    type='button'
                    onClick={() => this.deleteAssign(id)}
                    className="assignmentView-button"
                >
                    Delete
                </button>
            </div>
    }
}

export default withRouter(AssignmentView);