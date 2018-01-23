import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loading from '../Loading';
import CircularProgressbar from 'react-circular-progressbar';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.startOrResumeCourse = this.startOrResumeCourse.bind(this);
  }

  componentDidMount(){
    this.props.getAllCourses()
    .then((courses) => {
      this.setState({
        loading: undefined,
        courses: courses,
      })
    });
    window.scrollTo(0, 0);
  }
  
  resumeSection(course){
    let resumeSectionname = "";
    let resumeSectionID = Infinity;
    for (let section of course.sections){      
      if (section.completed === false && section.id < resumeSectionID){
        resumeSectionID = section.id;
        resumeSectionname = section.sectionname;
      }
    }
    return resumeSectionname;
  }

  startOrResumeCourse = (course) => {
    if (course.completion === 0) {
      return <div className="col-md-12">
        <Link to={`/${course.coursename}/intro`}><button className="btn btn-primary btn-block">Start course</button></Link>
      </div>
    } else if (course.completion === 1) {
      return <div className="col-md-12">
        <Link to={`/${course.coursename}/intro`}><button className="btn btn-primary btn-block">Restart course</button></Link>
      </div>
    }
    return <div className="col-md-12">
      <Link to={`/${course.coursename}/${this.resumeSection(course)}`}><button className="btn btn-primary btn-block">Resume course</button></Link>
    </div>
    };

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="container">

        <div className="banner progress-banner justify-content-center">
          <h1>Course progress</h1>
        </div>
          <div className="card-deck">

            {/* Generate card for each course */}

            {this.state.courses.map((course) => {
              const showProgress = () => {
                if (course.completion === 0) {
                  return <p className="text-muted">You haven't started this course yet! Click below to begin learning.</p>
                } else if (course.completion === 1) {
                  return (
                    <div>
                      <img src={`/badge-${course.coursename}.png`} className="mx-auto d-block" alt="Course Complete!" />
                    </div>
                  )
                }
                return <CircularProgressbar percentage={parseInt(course.completion * 100)} />
              }

              const courseProgressBlurb = () => {
                if (course.completion === 0) {
                  return <p className="progress-card-text">{course.blurb}</p>
                } else if (course.completion === 1) {
                  return (
                    <p className="progress-card-text">Course complete. Great job!</p>
                  )
                }
                return <p className="progress-card-text">Great progress! Keep on working hard.</p>
              }

              return (
                <div key={ course.id } className="card">
                  <div className="card-img-container">
                    <img src={`/card-${course.coursename}.png`} alt="" className="card-img-top" />
                  </div>
    	            <div className="card-body progress-card-body">
  			            <div className="col-md-12">
				              <div className="card-title">
					              {course.name}
				              </div>
                      <div>
                        {courseProgressBlurb()}
                      </div>
                    </div>
                  </div>
                  <div className="progress-card-block">
                    {showProgress()}
                  </div>
    	            <div className="card-footer">
                    {this.startOrResumeCourse(course)}
  	              </div>
                </div>
              )
            })}

            {/* End card generator */}

        </div>
    </div>
    )
  }
}
export default Progress;
