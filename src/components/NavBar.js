import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       return  this.props.currentUserId ?   (
        <div>
                <h1>NAVVVVVVVVVBARRRRRR</h1>
                <button
                    onClick={this.props.logoutUser}
                >
                    LOGOUT PLZ
                </button>
        </div>
        ) : null;

    }
}

export default NavBar;