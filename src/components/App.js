import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './auth/Login';
import AssignmentView from './AssignmentView';
import Signup from './auth/Signup';

import * as auth from '../api/auth.js';
import * as token from '../helpers/local-storage';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null
    }

    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }

async componentDidMount () {
    if (token.getToken()) {
      const { user } = await auth.profile();

      this.setState({ currentUserId: user._id });
    }
  }

  async loginUser(user) {
    const response = await auth.login(user);

    const profile = await auth.profile();

    this.setState({ currentUserId: profile.user._id });

  }

  async signupUser(user) {
    const response = await auth.signup(user);

    const profile = await auth.profile();
    this.setState({ currentUserId: profile.user._id });
  }


    render() {

      return (
        <Router>
            <Switch>
                <Route path='/login' exact component={() => {
                    return this.state.currentUserId ? <Redirect to='/' /> :
                    <Login onSubmit={this.loginUser} />
                 }} />

                 <Route path='/' exact component={() => {
                    return this.state.currentUserId ? <AssignmentView />:
                    <Redirect to='/login' />;
                 }} />

                  <Route path='/signup' exact component={() => {
                     return this.state.currentUserId ? <Redirect to='/' /> :
                     <Signup onSubmit={this.signupUser} />
                     ;
                  }} />

            </Switch>
        </Router>
      );
  }
}

export default App;
