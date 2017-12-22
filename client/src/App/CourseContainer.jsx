import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import CourseSidebar from './CourseSidebar';
import CourseContent from './CourseContent';
import CourseSummary from './CourseSummary';
import CourseCompleted from './CourseCompleted';

// Based on course ID (from Link to React Router declaration in Home), display:
// CourseSummary if course not started
// CourseContent if course started
// CourseCompleted if course done

function MainCoursePanelDisplay({ content, coursename }) {
  return <div className="row">
    <Switch>
      <Route path='/:coursename' exact component={CourseSummary}/>
      <Route path='/:coursename/:section' exact component={CourseContent}/>
      <Route path='/:coursename/complete' exact component={CourseCompleted}/>
    </Switch>
  </div>
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
      step: 0,
    };
    this.shuffle = this.shuffle.bind(this);
  }
  shuffle() {
    this.setState(
      { step:
         (this.state.step + 1) % 4
        }
      );
  }
  render() {
    const { match: { params: { coursename } } } = this.props;
    const { step } = this.state;
    const section =
      step === 0 ? <h1>Loading...</h1> :
        step === 1 ? <CourseSummary coursename={coursename} /> :
          step === 2 ? <CourseContent coursename={coursename} /> :
            step === 3 ? <CourseCompleted coursename={coursename} /> :
            <CourseNotFound />;
    return (
      <div className="container">
        <div className="row">
        <div className="col-lg-3">
          <CourseSidebar />
        </div>
        <div className="col-lg-9" onClick={this.shuffle}>
          {section}
        </div>
      </div>
      </div>
    );
  }
}

export default CourseContainer;
