import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from '../Loading';

function Section({section, coursename}){
  const completedCheck = section.completed && <span className='text-success'> {'\u2714'}</span>;
  return (
    <div key={ section.id }>
      <li>
        <Link to={`/${coursename}/${section.sectionname}`}>{section.name}</Link>
        {completedCheck}
      </li>
    </div>
  )

}

function Chapter({chapter, coursename}){
  return (
    <div>
      <li><strong className="chapter-name">{chapter.name}</strong>
        <ul>
          {chapter.sections.map((section) => {
            return <Section key={section.id} section={section} coursename={coursename}/>
          })}
        </ul>
      </li>
    </div>
  );
}

class CourseSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.setState({
      loading: undefined,

    });    
  }

  render() {

    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="sidebar-wrapper card-body">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Course outline</h3>
          </div>
          <ul>
            {this.props.chapters.map((chapter) => {
              return <Chapter key={chapter.id} chapter={chapter} coursename={this.props.coursename}/>
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default CourseSidebar;
