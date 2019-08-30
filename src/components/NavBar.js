import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

       return  this.props.currentUserId ?   (
        <div className="navBar-container">
                <li className="navBar-list">
                   <NavLink to="/" className="navBar-link" > Home </NavLink>
                   <NavLink to="/students" className="navBar-link"> All Students </NavLink>
                   <NavLink to="new" className="navBar-link"> Create New Assignment </NavLink>
                    <button
                        className="navBar-link"
                        id="logout"
                        onClick={this.props.logoutUser}
                    >
                        Logout
                    </button>
                </li>

        </div>
        ) :
            <div className="navBar-container">
                <li className="navBar-list">
                    <NavLink
                        to="/signup"
                        className="navBar-link"
                    >
                        Signup
                    </NavLink>


                    <NavLink to="/login" className="navBar-link">
                        Login
                    </NavLink>
                </li>

            </div>;

    }
}

export default NavBar;


//                    <button
//                        className="navBar-link"
//                        onClick={this.props.logoutUser}
//                    >
//                        Logout
//                    </button>