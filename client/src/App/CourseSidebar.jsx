import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getCourse, Loading} from '../course-service';


class CourseSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    getCourse(this.props.coursename)
    .then((course) => {
      this.setState({loading: undefined, ...course});
    })
  }
  
  render() {
    console.log(this.props);
    if (this.state.loading) {
      return (<Loading />);
    }
  return (
    <div>
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
  );
}
}

export default CourseSidebar;
