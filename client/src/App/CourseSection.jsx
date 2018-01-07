import React, { Component } from 'react';
import {getCourseContent, getCourse, Loading} from '../course-service';
// import {makeService} from '../userService';
import Markdown from 'react-remarkable';
import { Link } from 'react-router-dom';

class CourseSection extends Component {
  constructor(props) {
    super(props);
    this.submitSectionCompleted = this.submitSectionCompleted.bind(this);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.loadSection(this.props.params.section);
  }

  componentWillReceiveProps({ params: { section }  }) {
    if (this.props.params.section !== section) {
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

  submitSectionCompleted = (e) => {
    console.log("This is submitSectionCompleted");

    e.preventDefault();
    console.log("My Props", this.props);
    this.props.props.sectionCompleted(this.state.section_number)
    .then((data) => {
      this.props.props.onLogin(data.jwt);

      let nextSectionName = "";
      const currentChapterObject = this.props.chapters[this.state.chapter_id - 1];
      const nextChapterObject = this.props.chapters[this.state.chapter_id];

      if (this.state.section_number < currentChapterObject.sections.length) {
        nextSectionName = currentChapterObject.sections[this.state.section_number].sectionname;
      } else if (this.state.section_number === currentChapterObject.sections.length && nextChapterObject) {
        nextSectionName = nextChapterObject.sections[0].sectionname;
      } else {
        nextSectionName = "complete";
      }

      this.props.props.history.push(`/${this.props.coursename}/${nextSectionName}`);
    });
  };

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }

    console.log("STATE", this.state);
    console.log("PROPS", this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="card-body">
            <Markdown>
              {this.state.content}
            </Markdown>
              <div>
                {/* <Link to={`/${this.props.coursename}/${nextSectionName}`}> */}
                  <button className="btn btn-primary" onClick={this.submitSectionCompleted} name="Next section" value="Next">Next</button>
                {/* </Link> */}
              </div>
          </div>
        </div>
      </div>
    )
  };
}

export default CourseSection;
