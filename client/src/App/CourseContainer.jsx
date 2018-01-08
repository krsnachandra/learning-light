import React, { Component } from 'react';
import Loading from '../Loading';
import CourseContent from './CourseContent';

class CourseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.props.getCourse(this.props.coursename)
    .then((course) => {
      this.setState({loading: undefined, ...course});
    });
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }
    return (<CourseContent {...this.state} {...this.props} />);
  }
}


export default CourseContainer;
