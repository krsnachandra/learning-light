import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

// The following to be conditionally rendered in centre view based on Switch routes below

// Home will render for visitor, otherwise Progress when logged in
import Home from './Home';
import Progress from './Progress';

import Login from './Login';
import Register from './Register';
import Profile from './Profile';

import PublishedReviews from './PublishedReviews';
import CourseContainer from './CourseContainer';
import CourseCompleted from './CourseCompleted';

function App(){
  return (
    <div>
        <Navbar />
        <div className="App container">
          <Switch>
            <Route exact path='/' render={() => (
              <Home  />
            )}/>
            <Route path="/profile" exact component={Profile} />
            <Route path="/progress" exact component={Progress} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/reviews" component={PublishedReviews} />
            <Route path="/comp" component={CourseCompleted} />
            <Route path="/:coursename" render={
              ({match:{params:{coursename}}}) => (
                <CourseContainer coursename={coursename}/>
              )} />
          </Switch>
        </div>
        <Footer />
    </div>);
}

export default App;
