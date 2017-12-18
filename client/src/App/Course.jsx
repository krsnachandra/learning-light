import React, { Component } from 'react';

function CourseContent({ content }) {
  return (<div className="row">
    <div className="col-2">
      <ul>
        <li>Intro</li>
        <li>Moretro</li>
      </ul>
    </div>
    <div className="col">
      <h1>Intro to Javascript</h1>
      <h2>By Joel Shinness.</h2>
    </div>
  </div>);
}

function CourseNotFound() {
  return (<div>
    <h1>Course Not Found</h1>
    <p>Hey, we didn't find that course.  Did you mean:</p>

  </div>);
}

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
    this.shuffle = this.shuffle.bind(this);
  }
  shuffle() {
    this.setState({ step: (this.state.step + 1) % 3 });
  }
  render() {
    const { match: { params: { coursename } } } = this.props;
    const { step } = this.state;
    const section = step === 0 ? <h1>Loading...</h1> :
      step === 1 ? <CourseContent /> : <CourseNotFound />;
    return (<div onClick={this.shuffle}>
      {section}
    </div>);
  }
}

export default Course;
