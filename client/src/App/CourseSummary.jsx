import React, { Component } from 'react';
import {getCourse, Loading} from '../course-service';

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
    console.log(this.props);
    if (this.state.loading) {
      return (<Loading />);
    }
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div class="card-body">
        <h2>Course details</h2>
          <p>{this.state.description}</p>
        </div>
        <div class="card-body">
          <h2>Instructor</h2>
          <img src="./instructor-jg.png" alt="Juan Gonzalez" />
          <p>{this.state.instructor.name}</p>
          <p>{this.state.instructor.position}</p>
          <p>{this.state.instructor.description}</p>
        </div>
        <div class="card-body">
          <h3>
            Reviews for {this.state.name}
          </h3>
          <div>
            {this.state.reviews.map(function(review, index) {
              return <div key={ index }>
                <div className="block-text rel zmin">
                  <div>
                    {review.user.first_name}'s rating: {review.rating}
                  </div>
                  <div>
                    <p>{review.review}</p>
                  </div>
                </div>
              </div>;
              })
            }
          </div>
        </div>
      </div>);
    }
  }

  export default CourseSummary;
