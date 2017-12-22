import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Always renders header and footer */

import Footer from './Footer';
import Navbar from './Navbar';

/* The following to be conditionally rendered in centre view based on Switch routes below */

import Home from './Home'; // Home will render for visitor, otherwise Progress when logged in
import Progress from './Progress';


import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import CourseContainer from './CourseContainer';


class App extends Component {

  render() {
    return (
      <div>
      <div className="container-fluid">
        <Navbar />
      </div>
      <div className="App container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/progress" exact component={Progress} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/:coursename" component={CourseContainer} />
        </Switch>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>);
  }
}

export default App;
