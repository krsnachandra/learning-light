import React, { Component } from 'react';
import {getCourseContent, getCourse, Loading} from '../course-service';
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
    let nextSectionName = "";
    const currentChapterObject = this.props.chapters[this.state.chapter_id - 1];
    const nextChapterObject = this.props.chapters[this.state.chapter_id];
    console.log("Current chapter object is", currentChapterObject);

    if (this.state.loading) {
      return (<Loading />);
    }

    if (this.state.section_number < currentChapterObject.sections.length) {
      nextSectionName = currentChapterObject.sections[this.state.section_number].sectionname;
    } else if (this.state.section_number === currentChapterObject.sections.length) {
      nextSectionName = nextChapterObject.sections[0].sectionname;
    }


    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Markdown>
              {this.state.content}
            </Markdown>
            <div>
            <Link to={`/${this.props.coursename}/${nextSectionName}`}><button label="Next">Next</button></Link>
            </div>
        </div>
        </div>
      </div>
    )
  };
}

export default CourseSection;
