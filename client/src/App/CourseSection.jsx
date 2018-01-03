import React, { Component } from 'react';
import {getCourseContent} from '../course-service';
import Markdown from 'react-remarkable';

function Loading() {
  return <h1>Loading...</h1>;
}

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
      <div className="col">
        {/* <h4>{props.instructor.name}</h4> */}
        <Markdown>{this.state.content}</Markdown>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et libero sit amet mi gravida maximus. Mauris eget nibh sed ipsum interdum semper eu vel nisl. Integer mollis lorem et lorem auctor lobortis. Ut at sodales sapien, sit amet rhoncus nulla. Morbi gravida nulla quam, sed bibendum enim auctor vel. Sed dolor mauris, sollicitudin mollis tortor convallis, congue tempor nisl. In maximus auctor dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed bibendum mauris nulla, quis suscipit dui egestas quis. Donec feugiat mauris eu mi semper, et ultrices mi congue. Vestibulum aliquam aliquet tortor et scelerisque.</p>
        <iframe title="Example video" src="https://www.youtube.com/embed/TAbm4D_b9lc" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        <p>Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nulla purus, pellentesque sit amet mauris ac, venenatis facilisis massa. Cras volutpat blandit risus quis rutrum. In consectetur mattis augue, vitae faucibus magna suscipit non. Donec elementum ornare luctus. Sed porta iaculis odio, eget volutpat metus tincidunt non. Vivamus lacinia diam at ex congue efficitur. Duis sed justo accumsan, vulputate dui sed, condimentum odio.</p>
        <div>
          <iframe title="Example Codepen" src="http://codepen.io/mickwest/pen/eqtJo" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        </div>

        <div>
          <img src="http://www.clker.com/cliparts/I/B/u/K/E/N/thin-gray-next-button-hi.png" height="45" width="100" alt=""/>
        </div>
      </div>
    )
  };
}

export default CourseSection;
