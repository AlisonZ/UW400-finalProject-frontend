import React from 'react';

import '../styles/navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       return  this.props.currentUserId ?   (
        <div className="navBar-container">
                <li className="navBar-list">
                    <button className="navBar-link">
                        Home
                    </button>

                    <button className="navBar-link">
                        All Students
                    </button>

                    <button className="navBar-link">
                        Create New Assignment
                    </button>
                    <button
                        className="navBar-link"
                        onClick={this.props.logoutUser}
                    >
                        Logout
                    </button>
                </li>

        </div>
        ) : null;

    }
}

export default NavBar;