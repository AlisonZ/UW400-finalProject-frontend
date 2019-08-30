import React from 'react';

import '../../styles/inputFields.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange({ target: {name, value}}) {
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }



    render(props) {
        return(
           <div className="inputField-container">
                <h1 className="inputField-title">Login</h1>
               <form onSubmit={this.handleSubmit}>
                    <div className='inputField-form-entry'>
                        <label className="inputField-form-label">Email address</label>
                        <input
                            onChange={this.handleChange}
                            name='email'
                            value={this.state.email}
                            className="inputField-form-input"
                        />
                   </div>
                   <div className='inputField-form-entry'>
                       <label className="inputField-form-label">Password</label>
                       <input
                        onChange={this.handleChange}
                        name='password'
                        value={this.state.password}
                        className="inputField-form-input"
                       />
                   </div>
                   <button type='submit' className="inputField-button">Submit</button>
               </form>
           </div>

        )
    }
}

export default Login;