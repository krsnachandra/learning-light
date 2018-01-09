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
    Promise.all([
      this.props.getCourse("js-essentials-2"),
      this.props.getUserSections()
    ])
    .then(([course, current_user]) => {
      this.setState({
        loading: undefined,
        course: course,
        current_user: current_user
      });
      console.log("THIS PARAMS", this.props.params);
      console.log("THIS PROPS", this.props);
      console.log("THIS STATE", this.state);
    });

  }

  isSectionCompleted = (section_id) => {
    const userCompletedSection = this.state.current_user.user_sections.reduce(
      (completed, userSectionObj) => {
      return completed || userSectionObj.section_id === section_id;
      } , false)
    if (userCompletedSection) {
      return <span className='text-success'> {'\u2714'}</span>
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
          <h3>Outline</h3>
        </div>
          <ul className="list-unstyled components">

            {/* Begin creating headings from chapter names */}
            {this.state.course.chapters.map((chapter) => {
              return (
                <li key={chapter.id} className="active">
                  <a href="#chapter-submenu" className="chapter-name">{chapter.name}</a>
                  <ul className="collapse list-unstyled" id="chapter-submenu">

                    {/* Begin creating linkable subheadings from section names */}
                      {chapter.sections.map((section) => {
                        return (
                          <div key={ section.id }>
                            <li>
                              <Link to={`/js-essentials-2/${section.sectionname}`}>{section.name}</Link>
                              {this.isSectionCompleted(section.id)}
                            </li>
                          </div>
                        )
                      })}
                    {/* End subheadings creator */}

                  {/* End subheadings creator */}
                  </ul>
                </li>
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
