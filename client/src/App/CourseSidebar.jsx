import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from '../Loading';


class CourseSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    console.log("THIS PARAMS", this.props.params);
    console.log("THIS PROPS", this.props);
    // this.props.getCourse("js-essentials-2")
    // .then((course) => {
    //   this.setState({loading: undefined, ...course});
    // })

    Promise.all([
      this.props.getCourse("js-essentials-2"),
      this.props.getUserSections()
    ])
    .then(([course, current_user]) => {
      this.setState({
        loading: undefined,
        course: course,
        current_user: current_user
      })
    });
  }

  render() {

    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="sidebar-wrapper card-body">
        <nav id="sidebar">
          <h3>Outline</h3>
          <ul>
            {/* Begin creating headings from chapter names */}
            {this.state.course.chapters.map(function(chapter) {
              return (
                <div key={ chapter.id }>
                  <li>
                    <strong className="chapter-name">{chapter.name}</strong>
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

            {/* End headings creator */}
          </ul>
        </nav>
      <span className='text-success'>{'\u2714'}</span>
      </div>
    );
  }
}

export default CourseSidebar;
