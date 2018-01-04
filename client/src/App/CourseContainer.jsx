import React, { Component } from 'react';
import {getCourse, Loading} from '../course-service';
import CourseContent from './CourseContent';

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
