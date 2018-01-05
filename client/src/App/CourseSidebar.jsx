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
      <div className="sidebar-wrapper">
        <nav id="sidebar">
          <ul>

            {/* Begin creating headings from chapter names */}
            {this.state.chapters.map(function(chapter) {
              return (
                <div key={ chapter.id }>
                  <li>{chapter.name}
                    <ul id="chapter-submenu">

                    {/* Begin creating linkable subheadings from section names */}
                      {chapter.sections.map(function(section) {
                        return (
                          <div key={ section.id }>
                            <li>
                              <Link to={`/js-essentials-2/${section.sectionname}`}>{section.name}</Link>
                            </li>
                          </div>
                        )
                      })}
                    {/* End subheadings creator */}

                    </ul>
                  </li>
                </div>
              );
            })}

            {/* End creating headings from chapter names */}
          </ul>
        </nav>
      <span className='text-success'>{'\u2714'}</span>
      </div>
    );
  }
}

export default CourseSidebar;
