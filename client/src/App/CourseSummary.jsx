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
    });
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
      <div>
        David VanDusen
      </div>
      <div>
        Web Developer & Instructor
      </div>
      <div>
        <p>David is a sort of web dev Don Quixote, helping out wherever he is needed. He has grappled with his share of technological windmills yet continues his chivalrous fight for clean, beautiful code. That said, David is a renaissance man and pursues fine arts and music in his leisure.</p>
      </div>
      <div>
        <h3>
          Reviews (1)
        </h3>
        <h4>
          5 Stars! Thee Beste Course That Ever Coursed
        </h4>
          by Geoffrey Chaucer
        </div>
      </div>);
    }
  }

  export default CourseSummary;