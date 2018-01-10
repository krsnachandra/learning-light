import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';


function CourseCompleted ({ coursename, history, saveReview }) {
  return (
    <div className="col-lg-8 offset-lg-2">
      <div className="card-body text-center">
        <img className="course-complete-img" src="/parrot-left.gif" />
        <span className="display-4 align-middle">Congratulations!</span>
        <img className="course-complete-img" src="/parrot-right.gif" />
      </div>
      <div className="card-body text-center">

        <h2>You have completed JavaScript Essentials 2!</h2>
        <img src={`/badge-${coursename}.png`} alt="jsbadge"/><br/>
        <Review
          coursename={coursename}
          history={history}
          saveReview={saveReview} />
        <Link to='/progress' className="btn btn-primary">View progress</Link>
      </div>
  </div>
  )
}

export default CourseCompleted;
