import React, { Component } from 'react';
import {getCourseContent, Loading} from '../course-service';
import Markdown from 'react-remarkable';

class CourseSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    getCourseContent(this.props.coursename, this.props.sectionname)
    .then((course) => {
      this.setState({loading: undefined, ...course});
    });
  }

  render() {
    console.log(this.props);
    if (this.state.loading) {
      return (<Loading />);
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Markdown>
              {this.state.content}
            </Markdown>
            <div>
              <button label="Next" />
            </div>
        </div>
        </div>
      </div>
    )
  };
}

export default CourseSection;
