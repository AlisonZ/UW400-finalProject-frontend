import React from 'react';

class AuthError extends React.Component {
    render(){
        return (
            <div className="auth-error-container">
                <div className="auth-error-content">
                    Invalid credentials. Check your email and login and try again!
                </div>
            </div>
        )
    }
}

export default AuthError;