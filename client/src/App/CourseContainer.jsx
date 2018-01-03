import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import CourseSidebar from './CourseSidebar';import CourseContent from './CourseContent';
import CourseCompleted from './CourseCompleted';
import {getCourse, getCourseContent} from '../course-service';
import CourseSummary from './CourseSummary';


// TODO: make display actually dependent on props
// Based on course ID (from Link to React Router declaration in Home), display:
// CourseSummary if course not started
// CourseContent if course started
// CourseCompleted if course done

function MainCoursePanel({ content, coursename }) {
  return <div className="row">
    <CourseSidebar />
    <Switch>
      <Route path='/:coursename' exact component={CourseSummary}/>
      <Route path='/:coursename/:section' exact component={CourseContent}/>
      <Route path='/:coursename/complete' exact component={CourseCompleted}/>
    </Switch>
  </div>
}

function Loading() {
  return <h1>Loading...</h1>;
}

function CourseNotFound() {
  return <div>
    <h1>Course not found</h1>
    <p>Hey, we didn't find that course. Did you mean:</p>
  </div>
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
      return <Loading />;
    }
    const { coursename } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <CourseSidebar />
          </div>
          <div className="col-lg-9">
            <CourseContent {...this.state}/>
          </div>
        </div>
      </div>);
  }
}

export default CourseContainer;
