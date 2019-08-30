import React from 'react';

import * as assignments from '../../api/assignments';

import AssignmentView from './AssignmentView';

class AssignmentGrade extends React.Component {
    render(){
        return (
                   this.props.assignments.length ? (<div>
                    {this.props.assignments.map(assignment =>
                        <div>
                            <AssignmentView
                                title={assignment.assignmentTitle}
                                descr={assignment.assignmentDescription}
                                link={assignment.assignmentLink}
                                grade={assignment.assignmentGrade}
                                id={assignment._id}
                                admin={assignment.admin}
                                showGrades={true}
                            />
                        </div>
                    )}

                   </div>
                ) : null
        )
    }
}

export default AssignmentGrade;