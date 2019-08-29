import React from 'react';

import * as assignments from '../../api/assignments';

class CreateAssignment extends React.Component {

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
        const response = await assignments.createAssignment(this.state);
    }
    render() {
        return(
            <div>
                <h1>Create New Assignment</h1>
                   <form onSubmit={this.handleSubmit}>
                        <div className='new-assignment-entry'>
                            <label>Assignment Title</label>
                            <input
                                onChange={this.handleChange}
                                name='assignmentTitle'
                                value={this.state.assignmentTitle}
                            />
                       </div>
                       <div className='new-assignment-entry'>
                           <label>Project Link</label>
                           <input
                            onChange={this.handleChange}
                            name='assignmentLink'
                            value={this.state.assignmentLink}
                           />
                       </div>
                      <div className='new-assignment-entry'>
                          <label>Project Description</label>
                          <input
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

export default CreateAssignment;