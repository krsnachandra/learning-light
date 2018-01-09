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
<<<<<<< HEAD

    // TODO: update code to dynamically grab course name, once DB has more than
    // one course in it

    getCourse("js-essentials-2")
=======
    console.log("THIS PARAMS", this.props.params);
    console.log("THIS PROPS", this.props);
    this.props.getCourse("js-essentials-2")
>>>>>>> master
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

          <ul className="list-unstyled compoents">

            {/* Begin creating headings from chapter names */}

            {this.state.chapters.map(function(chapter) {
              return (
                <div key={ chapter.id }>
                  <li>
                    <a href="#chapter-submenu" data-toggle="collapse" aria-expanded="false">
                      <strong className="chapter-name">{chapter.name}</strong>
                    </a>

                    <ul id="chapter-submenu" className="collapse list-unstyled">

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
