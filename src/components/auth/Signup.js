import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target: {name, value}}) {

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }


    render() {
        return(
            <div>
                <h1>SIGNUP!!</h1>
                <form onSubmit={this.handleSubmit}>
                      <div className='login-form-entry'>
                            <label>Email address</label>
                            <input
                                onChange={this.handleChange}
                                name='email'
                                value={this.state.email}
                            />
                       </div>
                       <div className='login-form-entry'>
                           <label>Password</label>
                           <input
                            onChange={this.handleChange}
                            name='password'
                            value={this.state.password}
                           />
                       </div>
                      <div className='login-form-entry'>
                          <label>First Name</label>
                          <input
                           onChange={this.handleChange}
                           name='firstName'
                           value={this.state.firstName}
                          />
                      </div>
                     <div className='login-form-entry'>
                         <label>Last Name</label>
                         <input
                          onChange={this.handleChange}
                          name='lastName'
                          value={this.state.lastName}
                         />
                     </div>
                       <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup;