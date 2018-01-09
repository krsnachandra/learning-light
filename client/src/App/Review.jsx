import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, preValue, name) {
    this.setState({rating: nextValue});
  }

  onSubmit = (e) => {
    e.preventDefault();
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
      <div className="card-body">
        <h4>What did you think?</h4>
        <p>Your feedback will help us improve this course for future learners.</p>
        <form onSubmit={this.onSubmit.bind(this)} >
          <div>
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <textarea type="text" name="review" cols="80" rows="6" /><br/>
          <input className="btn btn-primary" type="submit" value="Submit review" name="submit" />
        </form>
      </div>
      );
  };
}

export default Review;
