import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

class Home extends Component {

  render(){
    return <div>
    <br/>
    <br/>
    <br/>
    <h2>{this.props.test}</h2>
    <h2 align="center">Learn the basics of web and iOS development <br/>
      with the team from Lighthouse Labs.</h2>
    <br/>
    <br/>
    <br/>
    <div align="center">
      <img src="/htmlcss.png" alt="htmlcss" height="400" width="240"/>
      <Link to='/course'>
        <img src="/js1.png" alt="js1" height="400" width="240"/>
      </Link>
      <img src="/js2.png" alt="js2" height="400" width="240"/>
      <img src="/ios.png" alt="ios" height="400" width="240"/>
    </div>
  </div>;
}
  
   
}
  export default Home;
