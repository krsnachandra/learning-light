import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from '../Loading';


class CourseSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.isSectionCompleted = this.isSectionCompleted.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading: undefined,

    });    
  }

  isSectionCompleted = (section_id) => {
    if (this.props.loggedIn && this.props.coursename == "js-essentials-2") {
      const userCompletedSection = this.props.sections[section_id - 1].completed
      if (this.props.loggedIn && userCompletedSection) {
        return <span className='text-success'> {'\u2714'}</span>
      }
    }
    return <div></div>
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

            {/* Begin creating headings from chapter names */}
            {this.props.chapters.map((chapter) => {
              return (
                <div key={ chapter.id }>
                  <li><strong className="chapter-name">{chapter.name}</strong>

                    <ul>

                    {/* Begin creating linkable subheadings from section names */}
                      {chapter.sections.map((section) => {
                        return (
                          <div key={ section.id }>
                            <li>
                              <Link to={`/${this.props.coursename}/${section.sectionname}`}>{section.name}</Link>
                              {this.isSectionCompleted(section.id)}
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

            {/* End headings creator */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default CourseSidebar;
