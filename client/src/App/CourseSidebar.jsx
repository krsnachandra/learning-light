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

    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="sidebar-wrapper card-body">
        <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Outline</h3>
        </div>
          <ul className="list-unstyled components">

            {/* Begin creating headings from chapter names */}

            {this.state.chapters.map(function(chapter) {
              return (
                <li key={chapter.id} className="active">
                  <a href="#chapter-submenu" className="chapter-name">{chapter.name}</a>
                  <ul className="collapse list-unstyled" id="chapter-submenu">

                  {/* Begin creating linkable subheadings from section names */}
                    {chapter.sections.map(function(section) {
                      return (
                        <li key={ section.id }>
                          <Link to={`/js-essentials-2/${section.sectionname}`}>{section.name}</Link>
                        </li>
                      )
                    })}

                  {/* End subheadings creator */}
                  </ul>
                </li>
              );
            })}

            {/* End headings creator */}

          </ul>
        </nav>
        <span className='text-success'>{'\u2714'}</span>
      </div>
    );
  }
}

export default CourseSidebar;
