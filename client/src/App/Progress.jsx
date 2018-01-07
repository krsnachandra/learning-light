import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getAllCourses, Loading} from '../course-service';
import CircularProgressbar from 'react-circular-progressbar';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){

    getAllCourses()
    .then((courses) => {
      return Promise.all([
        courses,
        this.props.getUserSections()
      ])
    })
    .then(([courses, current_user]) => {
      this.setState({
        loading: undefined,
        courses: courses,
        current_user: current_user
      })
    });

  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }
    {console.log("here STATE", this.state)};
    return (
      <div className="container">

        <div className="banner banner-progress justify-content-center">
          <h1>My learning progress</h1>
        </div>

        <div className="row">
          <div className="card-deck">

            {/* Generate card for each course */}

            {this.state.courses.map(function(course) {

              const showProgress = function () {

                // TODO: implement logic to check coursename against current_user's
                // user_sections
                // * "CircularProgressbar percentage" value should be a variable:
                //   percentageComplete = user_sections / course_sections * 100
                // * if percentageComplete = 100%, display badge

                if (course.coursename == "js-essentials-2") {
                  return (
                    <CircularProgressbar percentage={60} />
                  )
                } else if (course.coursename == "ios-essentials") {
                  return (
                    <p className="card-text">
                      {course.blurb}
                    </p>
                  )
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
  		              <div className="col-md-12">
                      <Link to={`/${course.coursename}`}><button className="btn btn-primary btn-block">Go to course</button></Link>
  		              </div>
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
