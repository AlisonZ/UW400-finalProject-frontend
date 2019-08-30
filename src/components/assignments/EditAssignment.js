import React from 'react';

import * as assignments from '../../api/assignments';

import '../../styles/inputFields.css';

class EditAssignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignmentTitle: '',
            assignmentLink:'',
            assignmentDescription:'',
            id: '',
            assignmentGrade: 95
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAssignment = this.setAssignment.bind(this);
    }

   handleChange({ target: {name, value}}) {
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await assignments.updateAssignment(this.state);
    }

    async setAssignment(e) {
        e.preventDefault();
        const response = await assignments.getAssignment(this.props.id);
    }

  async componentDidMount () {
        const { id } = this.props.location.state;
       const response = await assignments.getAssignment(id);
       const { assignmentDescription, assignmentGrade, assignmentLink, assignmentTitle } = response.response;

       this.setState({
            assignmentDescription,
            assignmentGrade,
            assignmentLink,
            assignmentTitle,
            id
       });
    }



    render() {
        return(
            <div className="inputField-container">
                <h1 className="inputField-title">Edit Assignment</h1>
                   <form onSubmit={this.handleSubmit}>
                        <div className='new-assignment-entry'>
                            <label className="inputField-form-label">Assignment Title</label>
                            <input
                                onChange={this.handleChange}
                                name='assignmentTitle'
                                value={this.state.assignmentTitle}
                                 className="inputField-form-input"
                            />
                       </div>
                       <div className='new-assignment-entry'>
                           <label className="inputField-form-label">Project Link</label>
                           <input
                            onChange={this.handleChange}
                            name='assignmentLink'
                            value={this.state.assignmentLink}
                            className="inputField-form-input"
                           />
                       </div>
                      <div className='new-assignment-entry'>
                          <label className="inputField-form-label">Project Description</label>
                          <input
                            onChange={this.handleChange}
                           name='assignmentDescription'
                            value={this.state.assignmentDescription}
                             className="inputField-form-input"
                          />
                      </div>
                       <button type='submit' className="inputField-button">Submit</button>
                   </form>

            </div>
        )
    }
}

export default EditAssignment;