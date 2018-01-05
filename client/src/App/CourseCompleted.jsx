import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';


function CourseCompleted () {
  return <div align="center">
    <h1>Congratulations!</h1>
    <h2>You have completed the JavaScript Essentials I course!</h2>
    <img src="/badge-js.png" alt="jsbadge"/><br/>
    <Review />
    <Link to='/progress'>See your progress page</Link>
  </div>;
}

export default CourseCompleted;
