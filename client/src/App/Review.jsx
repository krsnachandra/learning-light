import React from 'react';
// import { review } from '../reviewService';
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';



class Review extends React.Component {
  constructor(props) {
    super(props);
    this. state = {
      rating: 0
    };
  }

  onStarClick(nextValue, preValue, name) {
    this.setState({rating: nextValue});
  }

  onSubmit = (e) => {
    e.preventDefault();
    // const rating = e.target.elements.rating.value;
    const rating = 5;
    const review = e.target.elements.review.value;
    const show_flag = false;
    const course_id = 3;
    
    this.props.saveReview(rating, review, show_flag, course_id)
      .then((data) => {
        this.props.onLogin(data.jwt);
        this.props.history.push('/progress');
      });
  };

  render() {
    const { rating } = this.state;
    return (
      <div>
        <h1>Rate and review this course</h1>
        <form onSubmit={this.onSubmit.bind(this)} >

              <div>
                {/* <h2>{rating}</h2> */}
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
              </div>
              <br/>
              <br/>
              Review<br/><textarea type="text" name="review" cols="80" rows="6"></textarea><br />
            <input type="submit" value="Submit" name="submit" />
          </form>
      </div>
      );
  };
}

export default Review;
