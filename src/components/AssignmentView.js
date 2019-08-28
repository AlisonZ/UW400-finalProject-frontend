import React from 'react';

import * as assignments from '../api/assignments';

class AssignmentView extends React.Component {
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
        return(
            <div>Studennnnnts</div>
        )
    }
}

export default AssignmentView;