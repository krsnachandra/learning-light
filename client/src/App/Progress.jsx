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
    this.progressStatus = this.progressStatus.bind(this);
  }

  componentDidMount(){
    Promise.all([
      this.props.getAllCourses(),
      this.props.getUserSections()
    ])
    .then(([courses, current_user]) => {
      this.setState({
        loading: undefined,
        courses: courses,
        current_user: current_user
      })
    });
  }

  progressStatus = (course_id) => {
    const percentage = (this.state.current_user.user_sections.length/this.state.courses[course_id - 1].sections.length) * 100;
    return parseInt(percentage);
  }

  startOrResumeCourse = (coursename) => {
    if (this.state.current_user.user_sections === []) {
      return <div className="col-md-12">
        <Link to={`/${coursename}/intro`}><button className="btn btn-primary btn-block">Start Course</button></Link>
      </div>
    } else {
      return <div className="col-md-12">
        <Link to={`/${coursename}/callbacks`}><button className="btn btn-primary btn-block">Resume Course</button></Link>
      </div>
    }};

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }
    console.log("here STATE", this.state);
    return (
      <div className="container">

        <div className="banner banner-progress justify-content-center">
          <h1>My learning progress</h1>
        </div>

        <div className="row">
          <div className="card-deck">

            {/* Generate card for each course */}

            {this.state.courses.map((course) => {
              const showProgress = () => {
                if (course.coursename === "js-essentials-2") {
                  return <CircularProgressbar percentage={this.progressStatus(course.id)} />
                } else if (course.coursename === "ios-essentials") {
                  return <p className="card-text">
                    {course.blurb}
                  </p>
                } else {
                  return (
                    <div>
                      <img src={`/badge-${course.coursename}.png`} className="mx-auto d-block" alt="Course Complete!" />
                    </div>
                  )
                }}

              return (
                <div key={ course.id } className="card h-100">
  	              <div className="card-img-container">
  		              <img src={`/card-${course.coursename}.png`} alt="" className="img-fluid card-img-top" />
  	              </div>
    	            <div className="card-body">
    		            <div className="row">
    			            <div className="col-md-12">
  				              <div className="card-title">
  					              {course.name}
  				              </div>
                        <div className="card-title">
    					            <small className="text-muted">by {course.instructor.name}</small>
    				            </div>
                          <div className="card-block">
                            {showProgress()}
                          </div>

                      </div>
    			          </div>
    		          </div>
    	            <div className="row">
                    {this.startOrResumeCourse(course.coursename)}
  	              </div>
                </div>
              )
            })}

            {/* End card generator */}

        </div>
      </div>
    </div>
    )
  }
}
export default Progress;
