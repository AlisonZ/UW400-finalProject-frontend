import React from 'react';

import * as assignments from '../../api/assignments';

import AssignmentView from './AssignmentView';

class AssignmentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: {}
        }
    }

    async componentDidMount () {
        const response = await assignments.getAssignments();
        this.setState({ assignments: response.assignments });
    }

    render() {
           return (
               this.state.assignments.length ? (<div>
                {this.state.assignments.map(assignment =>
                    <AssignmentView
                        title={assignment.assignmentTitle}
                        descr={assignment.assignmentDescription}
                        link={assignment.assignmentLink}
                        grade={assignment.assignmentGrade}
                        id={assignment._id}
                    />
                )}

               </div>
            ) : null
    )}
}

export default AssignmentContainer;