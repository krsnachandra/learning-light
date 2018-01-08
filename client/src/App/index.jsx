import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

// The following to be conditionally rendered in centre view based on Switch routes below

// Home will render for visitor, otherwise Progress when logged in
import Home from './Home';
import Progress from './Progress';
import makeService from '../userService';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Profile from './Profile';
import CourseContainer from './CourseContainer';
import CourseCompleted from './CourseCompleted';
import {makeCourseService} from '../course-service';

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');

    this.state = {
      loggedIn: !!token,
    };
    this.service = makeService(token);
    this.courseService = makeCourseService(token);
    this.onLogin = this.onLogin.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
  }
  onLogin(token) {
    this.service = makeService(token);
    this.courseService = makeCourseService(token);
    localStorage.setItem('token', token);
    this.setState({ loggedIn: true });
  }
  onLogOut() {
    this.service = makeService();
    this.courseService = makeCourseService();
    localStorage.removeItem('token');
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} />
        <div className="App container">
          <Switch>
            <Route exact path='/' render={() => (
              <Home getAllCourses={this.courseService.getAllCourses}/>
            )}/>
           
            <Route path="/progress" 
            render={({ history }) => (<Progress
                getAllCourses={this.courseService.getAllCourses}
                getUserSections={this.service.getUserSections}
                history={history}
              />)}
             />
            <Route
              path="/login"
              render={({ history }) => (<Login
                onLogin={this.onLogin}
                logIn={this.service.logIn}
                history={history}
              />)}
             />
            <Route
              path="/profile"
              render={({ history }) => (<Profile
                loggedIn={this.state.loggedIn}
                onLogin={this.onLogin}
                updateUser={this.service.updateUser}
                history={history}
              />)}
             />
             <Route
              path="/register"
              render={({ history }) => (<Register
                onLogin={this.onLogin}
                register={this.service.register}
                history={history}
              />)}
             />
              <Route
              path="/logout"
              render={({ history }) => <Logout
                history={history}
                onLogOut={this.onLogOut}
              />}
             />
            <Route path="/:coursename/complete" render={
              ({match:{params:{coursename}}, history}) => (
                <CourseCompleted 
                  coursename={coursename}
                  saveReview={this.service.saveReview}
                  onLogin={this.onLogin}
                  history={history}/>
              )} />
            <Route path="/:coursename" render={
              ({match:{params:{coursename}}}) => (
                <CourseContainer
                  getCourseContent={this.courseService.getCourseContent}
                  getCourse={this.courseService.getCourse}
                  coursename={coursename}
                  sectionCompleted={this.service.sectionCompleted}
                  onLogin={this.onLogin}
                  history={history}/>
              )} />
            
          </Switch>
        </div>
        <Footer />
    </div>);

  };
};
export default App;
