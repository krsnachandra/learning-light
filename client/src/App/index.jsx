import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import Progress from './Progress';
import Course from './Course';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="App container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/progress" exact component={Progress} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/:coursename" component={Course} />
          </Switch>
        </div>
      </div>);
  }
}

export default App;