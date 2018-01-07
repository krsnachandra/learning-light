import React, { Component } from 'react';
import {getCourseContent, getCourse, Loading} from '../course-service';
import {makeService} from '../userService';
import Markdown from 'react-remarkable';
import { Link } from 'react-router-dom';

class CourseSection extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit = (e) => {
    e.preventDefault();
    // sectionCompleted(this.state.section_number)
    // .then((data) => {
    //   onLogin(data.jwt);
    //   history.push('/progress');
    // });
  };

  render() {
    let nextSectionName = "";
    const currentChapterObject = this.props.chapters[this.state.chapter_id - 1];
    const nextChapterObject = this.props.chapters[this.state.chapter_id];

    if (this.state.loading) {
      return (<Loading />);
    }


    if (this.state.section_number < currentChapterObject.sections.length) {
      nextSectionName = currentChapterObject.sections[this.state.section_number].sectionname;
    } else if (this.state.section_number === currentChapterObject.sections.length && nextChapterObject) {
      nextSectionName = nextChapterObject.sections[0].sectionname;
    } else {
      nextSectionName = "complete";
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
            <form onSubmit={this.onSubmit} >
              <div>
                <Link to={`/${this.props.coursename}/${nextSectionName}`}><button className="btn btn-primary" label="Next">Next</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  };
}

export default CourseSection;
