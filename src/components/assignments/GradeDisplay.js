import React from 'react';

import '../../styles/gradeDisplay.css';


class GradeDisplay extends React.Component {
    state = {
        grade: '',
        totalPoints: 100
    }

    async componentDidMount () {
        this.setState({grade: this.props.grade});
    }
    render() {
        const { grade } = this.props;

        return(
            <div className="gradeDisplay-container">
                <span className="gradeDisplay-box">{this.state.grade}</span>
                <span className="gradeDisplay-text">of</span>
                <span className="gradeDisplay-box">{this.state.totalPoints}</span>
                <div className="gradeDisplay-saveBtn">SAVE</div>
            </div>
        )
    }
}

export default GradeDisplay;