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
    getCourse("js-essentials-2")
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
        {this.state.chapters.map(function(chapter, index){
            return <div key={ index }>
              <h5>{chapter.name}</h5>
              {chapter.sections.map(function(section, index){
              return <div key={ index }>
                <li><Link to={`/js-essentials-2/${section.sectionname}`}>{section.name}</Link></li>
              </div>;
            })}
            </div>;
          })}
        <span className='text-success'>{'\u2714'}</span>
      </div>
    );
  }
}

export default CourseSidebar;
