import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CourseSummary from './CourseSummary';
import CourseSection from './CourseSection';
import CourseSidebar from './CourseSidebar';
import CourseCompleted from './CourseCompleted';
import Loading from '../Loading';

export default function CourseContent(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <CourseSidebar {...props} />
        </div>
        <div className="col-md-9">
          <Switch>
            <Route exact path='/:coursename' render={() => (
              <CourseSummary {...props} />
            )}/>
            <Route path='/:coursename/:section' render={({match}) => (
              <CourseSection {...props} params={match.params} />
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
