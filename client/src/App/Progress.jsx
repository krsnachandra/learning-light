import React from 'react';

function Progress() {
  return <div className="container">
    <br/>
    <h1 align="center">My course progress</h1>
    <br/>
      <div align="center">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card">
              <div className="card-img-container">
                <img src="https://s3.amazonaws.com/thinkific/courses/course_card_image_000/071/5581490308310.original.jpg?1490308310" alt="" className="card-img-top" />
              </div>
              <div className="card-body">

                <div className="row">
                  <div className="col-md-12">
                    <div className="card-instructor card-title">
                      Maggie Moss
                    </div>
                    <h4 className="card-title">
                      HTML &amp; CSS Essentials
                    </h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <a href="/courses/html-and-css" className="btn btn-primary btn-block">Start Course</a>
                </div>
              </div>
            </div>
          </div>
        {/* <img src="/htmlcss.png" alt="htmlcss" height="400" width="240"/>
        <Link to='/course'>
          <img src="/js1progress.png" alt="js1" height="400" width="240"/>
        </Link>
        <img src="/js2.png" alt="js2" height="400" width="240"/>
        <img src="/ios.png" alt="ios" height="400" width="240"/> */}
      </div>
    </div>
  </div>;
}

export default Progress;
