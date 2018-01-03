import React, { Component } from 'react';
import {getCourse} from '../course-service';
import CourseContent from './CourseContent';

// TODO: make display actually dependent on props
// Based on course ID (from Link to React Router declaration in Home), display:
// CourseSummary if course not started
// CourseContent if course started
// CourseCompleted if course done

function Loading() {
  return <h1>Loading...</h1>;
}

class CourseContainer extends Component {
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
    if (this.state.loading) {
      return (<Loading />);
    }
    const { coursename } = this.props;
    return (<CourseContent {...this.state} />);
  }
}


export default CourseContainer;
