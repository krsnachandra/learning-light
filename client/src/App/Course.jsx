import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import CourseDescription from './CourseDescription';
import {getCourse, getCourseContent} from '../course-service';

function Sidebar({coursename}) {
  return <div className="col-2">
    <h5><Link to={`/${coursename}/intro`}>Introduction <span className='text-success'>{'\u2714'}</span></Link></h5>
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
}

class ContentSection extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  render() {
    return (
      <div className="col">
        {/* <h3>{props.title}</h3> */}
        {/* <h4>{props.instructor.name}</h4> */}
        {/* <p>{getCourseContent(params.coursename, params.section)}</p> */}
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
    )
  };
}

function Loading(){
  return <h1>Loading...</h1>;
}

function CourseContent(props) {
  return <div className="row">
    <Sidebar {...props}/>
    <Switch>
      <Route exact path='/:coursename' render={() => (
        <CourseDescription {...props}/>
      )}/>
      <Route path='/:coursename/:section' render={() => (
        <ContentSection {...props}/>
      )}/>
    </Switch>
  </div>
}

function CourseNotFound() {
  return <div>
    <h1>Course Not Found</h1>
    <p>Hey, we didn't find that course. Did you mean:</p>
  </div>
}

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    // this.shuffle = this.shuffle.bind(this);
  }
  componentDidMount(){
    getCourse(this.props.coursename)
      .then((course) => {
        this.setState({loading: undefined, ...course});
      });
  }
  render() {
    if(this.state.loading){
      return <Loading/>;
    }
    const { coursename } = this.props;
    // const section = step === 0 ? <h1>Loading...</h1> :
    //   step === 1 ? <CourseContent content={content} coursename={coursename} /> : <CourseNotFound />;
    return (<div>
      <CourseContent {...this.state}/>
    </div>);
  }
}

export default Course;
