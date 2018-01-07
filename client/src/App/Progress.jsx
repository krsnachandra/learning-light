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
      this.setState({
        loading: undefined,
        courses: courses
      });
    })
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="container">

        <div id="banner" className="justify-content-center">
          <h1>My course progress</h1>
        </div>

        <div className="row">
          <div className="card-deck">

            {/* Generate card for each course */}

            {this.state.courses.map(function(course) {
              const showProgress = function () {
                if (course.coursename == "js-essentials-2") {
                  return <CircularProgressbar percentage={60} />
                } else if (course.coursename == "ios-essentials") {
                  return <p className="card-text">
                    {course.blurb}
                  </p>
                } else {
                  return <div>
                    <img src={`/badge-${course.coursename}.png`} alt="Course Complete!" />
                  </div>
                }}
              
              return (
                <div key={ course.id } className="card">
  	              <div className="card-img-container">
                    <img src={`/card-${course.coursename}.png`} alt="" className="card-img-top" />
  	              </div>
    	            <div className="card-body">
    		            <div className="row">
    			            <div className="col-md-12">
    				            <div className="card-instructor">
    					            {course.instructor.name}
    				            </div>
    				              <h4 className="card-title">
    					              {course.name}
    				              </h4>
                          <div>
                            {showProgress()}
                          </div>
    				              
                      </div>
    			          </div>
    		          </div>
    	            <div className="row">
  		              <div className="col-md-12">
                      <Link to={`/${course.coursename}`}><button className="btn btn-primary btn-block">View Course</button></Link>
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
