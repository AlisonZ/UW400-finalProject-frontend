import React from 'react';

import * as assignments from '../../api/assignments';

class EditAssignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //These should be set based on the input from the req
        //maybe in component did mount??
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
//        console.log('handlesubbb',this.state)
    }

    async setAssignment(e) {
        e.preventDefault();
        const response = await assignments.getAssignment(this.props.id);
//        console.log('response', response)
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
            <div>
                <h1>Edit Assignment!!!!</h1>
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

export default EditAssignment;