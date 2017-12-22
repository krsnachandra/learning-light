import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

function Home() {
    return <div>

      <h2 align="center">Learn the basics of web and iOS development <br/>
        with the team from Lighthouse Labs.</h2>
      <div align="center">
        <img src="/htmlcss.png" alt="htmlcss" height="400" width="240"/>

        <Link to='/course'>

        {/* TODO: set "currentCourse state/prop in link params and pass it up to index, then down to CourseContainer
        https://stackoverflow.com/questions/32901538/how-does-react-router-pass-params-to-other-components-via-props
        Hard-code links/props for now */}

          <img src="/js1.png" alt="js1" height="400" width="240"/>
        </Link>

        <img src="/js2.png" alt="js2" height="400" width="240"/>
        <img src="/ios.png" alt="ios" height="400" width="240"/>
      </div>
    </div>;
  }

  export default Home;
