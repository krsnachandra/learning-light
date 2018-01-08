import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';


function CourseCompleted ({ coursename, onLogin, history, saveReview }) {
  return (
    <div className="col-lg-8 offset-lg-2">
      <div className="card-body text-center">
        <h1>Congratulations!</h1>
        <h2>You have completed JavaScript Essentials 2!</h2>
        <img src={`/badge-${coursename}.png`} alt="jsbadge"/><br/>
        <Review
          coursename={coursename}
          onLogin={onLogin}
          history={history}
          saveReview={saveReview} />
        <Link to='/progress' className="btn btn-primary">View progress</Link>
      </div>
  </div>
  )
}

export default CourseCompleted;
