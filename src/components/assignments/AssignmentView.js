import React from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';

import '../../styles/assignmentView.css';

class AssignmentView extends React.Component {
    constructor(props) {
        super(props);
//        this.onEditClick = this.onEditClick.bind(this);
    }
//
//    onEditClick = () => {
//        console.log('ive been cliccck')
//    }




    render(){
//        console.log('asssss view ID', this.props.id)
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
        const { title, descr, link, grade, id } = this.props;
        return (
            <div className="assignmentView-container">
                <div className="assignmentView-title">{title}</div>
                <div className="assignmentView-descr"> {descr}</div>
                <div className="assignmentView-link">{link} </div>
                <div className="assignmentView-grade"> {grade} </div>
                <Button id={id}/>

                <button>Delete</button>
            </div>
        )
    }
}

export default withRouter(AssignmentView);