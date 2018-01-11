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
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps({ params: { section }  }) {
    if (this.props.params.section !== section) {
      this.setState({ loading: true });
      this.loadSection(section)
      window.scrollTo(0, 0);
    }
  }

  loadSection(sectionname) {
    this.props.getCourseContent(this.props.coursename, sectionname)
      .then((course) => {
        this.setState({loading: undefined, ...course});
    });
  }

  submitSectionCompleted = (e) => {
    this.props.sectionCompleted(this.state.id)
    .then((data) => {
      this.props.loadCourse(this.props.coursename);
      this.props.history.push(`/${this.props.coursename}/${this.state.next_section}`);
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
        <div className="row card">
          <div className="card-header text-muted">
            <h5>{this.props.name} <i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;
{this.state.name}</h5>
          </div>
          <div className="card-body">
            <Markdown options={{html: true}}>
              {this.state.content}
            </Markdown>
          </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={this.submitSectionCompleted} name="Next section" value="Next">Next</button>
            </div>
        </div>
      </div>
    )
  };
}

export default CourseSection;
