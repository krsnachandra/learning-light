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

      <div className="banner banner-home justify-content-center">
          <h1>Learn web and iOS development with us!</h1>
      </div>

      <div className="row">
        <div className="card-deck">

        {/* Generate card for each course */}

          {this.state.courses.map(function(course) {
            return (
              <div key={ course.id } className="card h-100">
	              <div className="card-img-container">
		              <img src={`/card-${course.coursename}.png`} alt="" className="card-img-top" />
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
                      <div className="card-text">
                        {course.blurb}
                      </div>
                    </div>
  			          </div>
  		          </div>
  	            <div className="row">
		              <div className="col-md-12 text-center">
			              <Link to={`/${course.coursename}`}>
                      <button className="btn btn-primary btn-block">View free course</button>
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
