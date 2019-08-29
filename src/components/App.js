import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './auth/Login';
import AssignmentContainer from './assignments/AssignmentContainer';
import Signup from './auth/Signup';
import NavBar from './NavBar';
import CreateAssignment from './assignments/CreateAssignment';

import * as auth from '../api/auth.js';
import * as token from '../helpers/local-storage';
//import * as assignments from '../api/assignments';

import '../styles/app.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null
    }

    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
//    this.createAssignment = this.createAssignment.bind(this);
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

  async logoutUser() {
    token.clearToken();
    this.setState({ currentUserId: null });
  }

//  async createAssignment(assignment) {
//    const response = await assignments.createAssignment(assignment);
//  }
    render() {

      return (
        <Router>
        <h1 className="app-header">Assignment Tracker</h1>
            <NavBar logoutUser={this.logoutUser} currentUserId={this.state.currentUserId}/> :
            <Switch>
                <Route path='/login' exact component={() => {
                    return this.state.currentUserId ? <Redirect to='/' /> :
                    <Login onSubmit={this.loginUser} />
                 }} />

                 <Route path='/' exact component={() => {
                    return this.state.currentUserId ? <AssignmentContainer currentUserId={this.state.currentUserId}/>:
                    <Redirect to='/login' />;
                 }} />

                  <Route path='/signup' exact component={() => {
                     return this.state.currentUserId ? <Redirect to='/' /> :
                     <Signup onSubmit={this.signupUser} />
                     ;
                  }} />

                  <Route path="/new" exact component={() => {
                    return <CreateAssignment />
                  }} />

            </Switch>
        </Router>
      );
  }
}

export default App;
