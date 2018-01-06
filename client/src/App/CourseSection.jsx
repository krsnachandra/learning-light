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

  // getNextSectionName() {
  // return getCourse(this.props.coursename)
  //   .then((course) => {
  //     const nextSectionName = course.chapters[(this.state.chapter_id - 1)].sections[this.state.id].sectionname;
  //     console.log("nextSectioName appears as", nextSectionName);
  //     return nextSectionName;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // }

  getNextSectionName() {
  return getCourse(this.props.coursename)
    .then((course) => {
      const nextSectionName = course.chapters[(this.state.chapter_id - 1)].sections[this.state.id].sectionname;
      console.log("nextSectioName appears as", nextSectionName);
      return nextSectionName;
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    console.log("This state is!", this.state);
    console.log("This props is!", this.props);
    const nextSection = this.getNextSectionName();

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
            <Link to={`/${this.props.coursename}/${nextSection}`}><button label="Next">Next</button></Link>
            </div>
        </div>
        </div>
      </div>
    )
  };
}

export default CourseSection;
