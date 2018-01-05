import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getAllCourses, Loading} from '../course-service';

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
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

            {/* Generate card for each course */}

            {this.state.courses.map(function(course) {
              return (
                <div key={ course.id } className="card">
  	              <div className="card-img-container">
  		              <img src="https://s3.amazonaws.com/thinkific/courses/course_card_image_000/197/6151508709032.original.jpg?1508709032" alt="" className="card-img-top" />

                    {/* TODO: update course table in DB with 'image' column containing pic
                      filename and replace above line with:
                        <img src=`/{course.course_pic}` alt="" className="card-img-top" />
                     */}

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
    					              Insert card blurb code here.

                            {/* TODO: update course table in DB with 'blurb' column and
                              replace above line with:
                                <p>{course.blurb}</p>
                             */}

    				              </p>
                      </div>
    			          </div>
    		          </div>
    	            <div className="row">
  		              <div className="col-md-12">
  			              <Link to="/js-essentials-2"><button className="btn btn-primary btn-block">Resume course</button></Link>

                      {/* TODO: update course table in DB with 'path' column and
                        replace above line with:
                        <Link to=`/{course.path}`><button className="btn btn-primary btn-block">Resume course</button></Link>
                        */}

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
