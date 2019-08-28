import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Login from './auth/Login';
import * as auth from '../api/auth.js';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null
    }

//    this.loginUser = this.loginUser.bind(this)
  }

//    loginUser(user) {
//        console.log('userrr', user)
//      fetch('http://localhost:5000/api/login', {
//        body: JSON.stringify(user),
//        headers: {
//          'Content-Type': 'application/json'
//        },
//        method: 'POST',
//      }).then(res => res.json()).then(console.log)
//    }

    render() {

  return (
    <Router>
        <Switch>
            <Route path='/login' exact component={() => {
                return <Login onSubmit={auth.login} />
             }} />
        </Switch>
    </Router>
  );
  }
}

export default App;
