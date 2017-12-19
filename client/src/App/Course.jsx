import React, { Component } from 'react';

function CourseContent({ content }) {
  return (<div className="row">
    <div className="col-2">
      <h5>Introduction</h5>
      <ul>
        <li>Intro</li>
        <li>Section 2</li>
        <li>Section 3</li>
        <li>Section 4</li>
        <li>Section 5</li>
      </ul>
      <h5>Chapter 2</h5>
      <h5>Chapter 3</h5>
      <h5>Chapter 4</h5>
      <h5>Chapter 5</h5>
      <h5>Chapter 6</h5>
    </div>
    <div className="col">
      <h3>Intro to Javascript</h3>
      <h4>By Joel Shinness.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et libero sit amet mi gravida maximus. Mauris eget nibh sed ipsum interdum semper eu vel nisl. Integer mollis lorem et lorem auctor lobortis. Ut at sodales sapien, sit amet rhoncus nulla. Morbi gravida nulla quam, sed bibendum enim auctor vel. Sed dolor mauris, sollicitudin mollis tortor convallis, congue tempor nisl. In maximus auctor dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed bibendum mauris nulla, quis suscipit dui egestas quis. Donec feugiat mauris eu mi semper, et ultrices mi congue. Vestibulum aliquam aliquet tortor et scelerisque.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TAbm4D_b9lc" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      <p>Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nulla purus, pellentesque sit amet mauris ac, venenatis facilisis massa. Cras volutpat blandit risus quis rutrum. In consectetur mattis augue, vitae faucibus magna suscipit non. Donec elementum ornare luctus. Sed porta iaculis odio, eget volutpat metus tincidunt non. Vivamus lacinia diam at ex congue efficitur. Duis sed justo accumsan, vulputate dui sed, condimentum odio.</p>
    
    <div>
      <iframe width="900" height="450" src="http://codepen.io/mickwest/pen/eqtJo" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
    </div>
    <div>
      <img src="http://www.clker.com/cliparts/I/B/u/K/E/N/thin-gray-next-button-hi.png" height="45" width="100" />
    </div>
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
