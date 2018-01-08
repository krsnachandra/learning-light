import React, { Component } from 'react';
import {getCourse, Loading} from '../course-service';
import { Link } from 'react-router-dom';

class CourseSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    getCourse(this.props.coursename)
    .then((course) => {
      this.setState({loading: undefined, ...course});
    })
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="card-body">
        <h1>{this.state.name}</h1>
        <div className="card-body">
          <figure className="figure float-right">
            <img className="figure-img img-fluid rounded" src={`/instructor-${this.state.instructor.id}.png`} />
            <figcaption className="figure-caption text-center">
              {this.state.instructor.name}<br />
              {this.state.instructor.position}
            </figcaption>
          </figure>
        <h2>Course details</h2>
          <p>
            {this.state.description}
          </p>
          <div>
            <Link to={`/${this.props.coursename}/intro`}>
              <button className="btn btn-primary" label="Start course">Start learning now!</button>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <h2>Instructor</h2>
          <p>
            {this.state.instructor.description}
          </p>
        </div>
        <div className="card-body">
          <h3>
            Reviews for {this.state.name}
          </h3>
          <div className="card-block">

            {/* Begin generating reviews from DB array */}

            {this.state.reviews.map(function(review) {
              if (review.show_flag === true) {
                return <div key={ review.id }>
                  <div className="card-body">
                    <div className="card-title">
                      {review.user.first_name}'s rating: {review.rating}
                    </div>
                    <div className="card-text">
                      <p>{review.review}</p>
                    </div>
                  </div>
                </div>;
              }
            })}
          </div>

          {/* End reviews generation */}

        </div>
      </div>);

    }
  }

  export default CourseSummary;
