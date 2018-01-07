import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';


function CourseCompleted ({ coursename, onLogin, history, saveReview }) {
  return <div align="center">
    <h1>Congratulations!</h1>
    <h2>You have completed the JavaScript Essentials I course!</h2>
    <img src="/badge-js-essentials-2.png" alt="jsbadge"/><br/>
    <Review 
      coursename={coursename}
      onLogin={onLogin}
      history={history}
      saveReview={saveReview} />
    <Link to='/progress'>See your progress page</Link>
  </div>;
}

export default CourseCompleted;
