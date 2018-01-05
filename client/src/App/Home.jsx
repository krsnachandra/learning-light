import React from 'react';
import { Link } from 'react-router-dom';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default function Home() {
  return (
    <div className="container">

      <div id="banner" className="justify-content-center">
          <h1>Learn web and iOS development with us!</h1>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
                <p className="card-text">
                  Learn to build basic web pages using HTML &amp; CSS.
                </p>
              </div>
            </div>
            <Rater total={5} rating={0} />
            </div>

            <div className="row">
              <div className="col-md-12">
                <a href="/courses/html-and-css" className="btn btn-primary btn-block">View free course</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-img-container">
              <img src="https://s3.amazonaws.com/thinkific/courses/course_card_image_000/073/3551490308653.original.jpg?1490308653" alt="" className="card-img-top" />
            </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className=" card-instructor card-title">
                  David VanDusen
                </div>
                <h4 className="card-title">
                  Javascript Essentials Part I
                </h4>
                <p className="card-text">
                  Learn to build and style your own web-based chat app using JavaScript.
                </p>
              </div>
            </div>
            <Rater total={5} rating={0} />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/js-essentials"><button className="btn btn-primary btn-block">View free course</button></Link>
          </div>
        </div>
      </div>
    </div>

      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
          <div className="card-img-container">
            <img src="https://s3.amazonaws.com/thinkific/courses/course_card_image_000/120/8341495230939.original.png?1495230939" alt="" className="card-img-top" />
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className=" card-instructor card-title">
                  David Mills
                </div>
                <h4 className="card-title">
                  iOS Essentials
                </h4>
                <p className="card-text">
                  Learn the basics of iOS development using Swift by building a mobile music player.
                </p>
              </div>
            </div>
            <Rater total={5} rating={0} />
          </div>
          <div className="row">
            <div className="col-md-12">
              <a href="/courses/iOS-Essentials" className="btn btn-primary btn-block">View free course</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
          <div className="card-img-container">
            <img src="https://s3.amazonaws.com/thinkific/courses/course_card_image_000/197/6151508709032.original.jpg?1508709032" alt="" className="card-img-top" />
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className=" card-instructor card-title">
                  Juan Gonzalez
                </div>
                <h4 className="card-title">
                  Javascript Essentials Part II
                </h4>
                <p className="card-text">
                  Upgrade your chat app by building your own Bot with JavaScript.
                </p>
              </div>
            </div>
            <Rater total={5} rating={0} />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link to="/js-essentials-2"><button className="btn btn-primary btn-block">View free course</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
