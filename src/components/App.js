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
  }


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
