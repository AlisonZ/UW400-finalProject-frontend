import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './auth/Login';
import AssignmentContainer from './assignments/AssignmentContainer';
import EditAssignment from './assignments/EditAssignment'
import Signup from './auth/Signup';
import NavBar from './NavBar';
import UpdateAssignment from './assignments/UpdateAssignment';

import * as auth from '../api/auth.js';
import * as token from '../helpers/local-storage';

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
                    //TODO: this isn't working because of interaction with /login logic
                    //future work will fix this if there is time
//                    return this.state.currentUserId ? <CreateAssignment /> :
//                        <Redirect to='/login' />;
                       return (
                           <div>
                                <h1>Create New Assignment</h1>
                                <UpdateAssignment />
                           </div>
                       )
                  }} />

                  <Route path="/edit" exact component={() => {
                     return (
                           <div>
                                <h1>Edit Assignment</h1>
                                <UpdateAssignment />
                           </div>
                     )

                  }} />

            </Switch>
        </Router>
      );
  }
}

export default App;
