import React, { Component } from 'react';
import PublishedReviews from './PublishedReviews';
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
        <div>
        {this.state.reviews.map(function(review, index){
          return <div key={ index }>
            <p>{review.review}</p>
            <p>~{review.user.first_name}</p>
          </div>;
        })}
        </div>
        </div>
      </div>);
    }
  }

  export default CourseSummary;
