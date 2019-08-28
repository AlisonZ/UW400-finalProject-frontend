import React from 'react';

class AssignmentView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { title, descr, link, grade } = this.props;
        return (
            <div>
                <div>{title}</div>
                <div> {descr}</div>
                <div>{link} </div>
                <div> {grade} </div>
            </div>
        )
    }
}

export default AssignmentView;