import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';

function Progress() {
  return <h1>Progress</h1>;
}
function Home() {
  return <Redirect to="/progress" />;
}
function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <p>Update Your Profile</p>
      <p>Here will be one (or several?) form(s) to update profile details</p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} height="50" width="50" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/progress" exact component={Progress} />
        </Switch>
      </div>
    );
  }
}

export default App;
