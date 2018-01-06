import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Rater from 'react-rater'
import {getAllCourses, Loading} from '../course-service';
import 'react-rater/lib/react-rater.css'

class Home extends Component {
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
          <h1>Learn web and iOS development with us!</h1>
      </div>

      <div className="row">
        <div className="card-deck">

{/* Generate card for each course */}

{this.state.courses.map(function(course) {
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
    				              <p className="card-text">
                            {course.blurb}
    				              </p>
                      </div>
    			          </div>
    		          </div>
    	            <div className="row">
  		              <div className="col-md-12">
  			              <Link to={`/${course.coursename}`}>
                        <button className="btn btn-primary btn-block">View Course</button>
                      </Link>
  		              </div>
  	              </div>
                </div>
              )
            })}

            {/* End card generator */}

      </div>
    </div>
  </div>
  )};
}

export default Home;
