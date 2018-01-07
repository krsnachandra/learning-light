import React from 'react';
// import { review } from '../reviewService';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import axios from 'axios';



function Review({ coursename, onLogin, history, saveReview }) {

  const onSubmit = (e) => {
    e.preventDefault();
    // const rating = e.target.elements.rating.value;
    const rating = 5;
    const review = e.target.elements.review.value;
    const show_flag = false;
    const course_id = 3;

    saveReview(rating, review, show_flag, course_id)
      .then((data) => {
        onLogin(data.jwt);
        history.push('/progress');
      });
  };

  return (
  <div class="card-body">
    <form onSubmit={onSubmit} >
      <div class="form-group">
        <h3>Rate this course</h3>
        <p>
          <Rater total={5} rating={0} name="rating"/>
        </p>
      </div>
      <div class="form-group">
        <p>
          What did you think?
        </p>
        <p>
          <textarea type="text" name="review" rows="6" className="form-control"/>
        </p>
        <p>
          <input type="submit" value="Submit review" name="submit" className="btn btn-primary"/>
        </p>
      </div>
    </form>
  </div>);
};

export default Review;
