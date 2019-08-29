import React from 'react';

import * as assignments from '../../api/assignments';

import '../../styles/updateAssignment.css';

class UpdateAssignment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            assignmentTitle: '',
            assignmentLink:'',
            assignmentDescription:'',
            assignmentGrade: 95
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange({ target: {name, value}}) {
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log('this.state', this.state)
        const response = await assignments.createAssignment(this.state);
    }
    render() {
        return(
            <div>
                   <form onSubmit={this.handleSubmit}>
                        <div className="updateAssignment-field">
                            <label>Assignment Title</label>
                            <input
                                className="updateAssignment-input"
                                onChange={this.handleChange}
                                name='assignmentTitle'
                                value={this.state.assignmentTitle}
                            />
                       </div>
                       <div className="updateAssignment-field">
                           <label>Project Link</label>
                           <input
                            className="updateAssignment-input"
                            onChange={this.handleChange}
                            name='assignmentLink'
                            value={this.state.assignmentLink}
                           />
                       </div>
                      <div className="updateAssignment-field">
                          <label>Project Description</label>
                          <input
                            className="updateAssignment-input"
                            onChange={this.handleChange}
                           name='assignmentDescription'
                            value={this.state.assignmentDescription}
                          />
                      </div>
                       <button type='submit'>Submit</button>
                   </form>

            </div>
        )
    }
}

export default UpdateAssignment;