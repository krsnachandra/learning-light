import React, { Component } from 'react';
import Loading from '../Loading';
import CourseContent from './CourseContent';

class CourseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.loadCourse=this.loadCourse.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.loadCourse(this.props.coursename)
  }

  loadCourse(coursename) {
    this.props.getCourse(coursename)
      .then((course) => {
        this.setState({loading: undefined, ...course});
    });
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }
    return (<CourseContent {...this.state} {...this.props} loadCourse={this.loadCourse} />);
  }
}


export default CourseContainer;
