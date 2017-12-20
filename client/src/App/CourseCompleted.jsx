import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function CourseCompleted () {
  return <div align="center">
    <h1>Congratulations!</h1>
    <h2>You have completed the JavaScript Essentials I course!</h2>
    <img src="/jsbadge.png" alt="jsbadge"/><br/>
    <Link to='/review'>Rate and review this course</Link><br/>
    <Link to='/progress'>See your progress page</Link>
  </div>;
}

export default CourseCompleted;
