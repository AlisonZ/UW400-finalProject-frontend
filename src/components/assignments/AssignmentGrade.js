import React from 'react';

import * as assignments from '../../api/assignments';

import AssignmentView from './AssignmentView';

class AssignmentGrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: {}
        }
    }
    async componentDidMount() {
        const assignmentList = await assignments.getGradedAssignments();
        this.setState({assignments: assignmentList.gradedAssignments})

    }
    render(){
        return (
                   this.state.assignments.length ? (<div>
                    {this.state.assignments.map(assignment =>
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