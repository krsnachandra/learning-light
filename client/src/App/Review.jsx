import React from 'react';
// import { review } from '../reviewService';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import axios from 'axios';



function Review({ onLogin, history, saveReview }) {
  
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
  <div>
    <h1>Rate and review this course</h1>
    <form onSubmit={onSubmit} >
          Rating<br/>
        <Rater total={5} rating={0} name="rating" />
          <br/>
          <br/>
          Review<br/><textarea type="text" name="review" cols="80" rows="6"></textarea><br />
        <input type="submit" value="Submit" name="submit" />
      </form>
</div>);
};

export default Review;
