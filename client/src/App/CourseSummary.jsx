import React, { Component } from 'react';
import PublishedReviews from './PublishedReviews';
import {getCourse} from '../course-service';

function Loading() {
  return <h1>Loading...</h1>;
}

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
        <h2>Course Details</h2>
      <div>
        <p>{this.state.description}</p>
      </div>
      <div>
        <h2>Instructor</h2>
      </div>
      <div>
        <img src='https://s3.amazonaws.com/thinkific/instructors/000/046/9561488219777.small.png?1488219777' alt='David VanDusen' className='instructor__img' />
      </div>
      <div>{this.state.instructor.name}</div>
      <div>{this.state.instructor.position}</div>
      <div>{this.state.instructor.description}</div>
      <div>
        <h3>
          Reviews (2)
        </h3>
        {/* <% for (const review of reviews) { %>
          <div>{this.state.reviews.review}</div>
          <div>{this.state.reviews.review.user.first_name}</div>
        <% } %> */}
        </div>
      </div>);
    }
  }

  export default CourseSummary;