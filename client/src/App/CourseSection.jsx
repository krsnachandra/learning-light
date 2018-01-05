import React, { Component } from 'react';
import {getCourseContent, Loading} from '../course-service';
import Markdown from 'react-remarkable';
import { Link } from 'react-router-dom';

class CourseSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.loadSection(this.props.params.section);
  }

  componentWillReceiveProps({ params: { section }  }) {
    if (this.props.params.sectionname !== section) {
      this.setState({ loading: true });
      this.loadSection(section)
    }
  }

  loadSection(sectionname) {
    getCourseContent(this.props.coursename, sectionname)
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
            <Link to={`/${this.props.coursename}`}><button label="Next">Next</button></Link>
            </div>
        </div>
        </div>
      </div>
    )
  };
}

export default CourseSection;
