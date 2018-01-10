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
    if (this.props.loggedIn) {
      const userCompletedSection = this.props.sections[section_id - 1].completed
      if (this.props.loggedIn && userCompletedSection) {
        return <span className='text-success'> <i class="fa fa-check-square-o" aria-hidden="true"></i>
</span>
      }
    }
    return <div></div>
  }

  // TODO: find a way to highlight the current section in the sidebar
  // highlightCurrentSecton = (sectionname) => {
  //   if (this.props.loggedIn) {
  //
  //     const currentSidebarSectionName =
  //
  //     if (this.props.loggedIn && userCompletedSection) {
  //       return (
  //         // this needs to be highlighted
  //         <li>
  //           <Link to={`/js-essentials-2/${section.sectionname}`}>{section.name}</Link>
  //           {this.isSectionCompleted(section.id)}
  //         </li>
  //       )
  //     }
  //     return (
  //       <li>
  //         <Link to={`/js-essentials-2/${section.sectionname}`}>{section.name}</Link>
  //         {this.isSectionCompleted(section.id)}
  //       </li>
  //     )
  //   }
  // }
  //

  render() {

    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="sidebar-wrapper card">
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
                              <Link to={`/js-essentials-2/${section.sectionname}`}>{section.name}</Link>
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
      </div>
    );
  }
}

export default CourseSidebar;
