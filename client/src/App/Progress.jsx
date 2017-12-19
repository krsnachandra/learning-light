import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function Progress() {
  return <div>
    <br/>
    <h1 align="center">Progress</h1>
    <br/>
      <div align="center">
        <img src="/htmlcss.png" alt="htmlcss" height="400" width="240"/>
        <Link to='/course'>
          <img src="/js1progress.png" alt="js1" height="400" width="240"/>
        </Link>
        <img src="/js2.png" alt="js2" height="400" width="240"/>
        <img src="/ios.png" alt="ios" height="400" width="240"/>
      </div>
  </div>;
}

export default Progress;
