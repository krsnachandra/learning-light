import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CourseSummary from './CourseSummary';
import CourseSection from './CourseSection';
import CourseSidebar from './CourseSidebar';
import CourseCompleted from './CourseCompleted';


export default function CourseContent(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <CourseSidebar />
        </div>
        <div className="col-lg-9">
          <Switch>
            <Route exact path='/:coursename' render={() => (
              <CourseSummary {...props} />
            )}/>
            <Route path='/:coursename/:section' render={() => (
              <CourseSection {...props} />
            )}/>
            <Route exact path='/:coursename/complete' render={() => (
              <CourseCompleted {...props} />
            )}/>
          </Switch>
        </div>
      </div>
    </div>
  );
  }
