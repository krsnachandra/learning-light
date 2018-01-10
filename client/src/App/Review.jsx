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
    const rating = this.state.rating;
    const review = e.target.elements.review.value;
    const course_id = 3;
    this.props.saveReview(rating, review, course_id)
      .then((data) => {
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
                    className="review-star"
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
