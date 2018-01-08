import React, { Component } from 'react';
import  Loading from '../Loading';
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
    this.props.getCourseContent(this.props.coursename, sectionname)
      .then((course) => {
        this.setState({loading: undefined, ...course});
    });
  }
  getNextSectionName(){
    const currentChapterObject = this.props.chapters[this.state.chapter_id - 1];
    const nextChapterObject = this.props.chapters[this.state.chapter_id];

    if (this.state.section_number < currentChapterObject.sections.length) {
      return currentChapterObject.sections[this.state.section_number].sectionname;
    } 
    if (this.state.section_number === currentChapterObject.sections.length && nextChapterObject) {
      return nextChapterObject.sections[0].sectionname;
    } 
    return "complete";
  }
  submitSectionCompleted = (e) => {
    console.log("This is submitSectionCompleted");
    console.log("My Props", this.props);
    this.props.sectionCompleted(this.state.id)
    .then((data) => {
      this.props.history.push(`/${this.props.coursename}/${this.getNextSectionName()}`);
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
