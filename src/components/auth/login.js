import React from 'react';

class Login extends React.Component {
    render() {
        return(
           <div>
                <h1>LOGIN!!</h1>
               <form>
                    <div className='login-form-entry'>
                        <label>Email address</label>
                        <input></input>
                   </div>
                   <div className='login-form-entry'>
                       <label>Password</label>
                       <input></input>
                   </div>
                   <button type='submit'>Submit</button>
               </form>
           </div>

        )
    }
}

export default Login;