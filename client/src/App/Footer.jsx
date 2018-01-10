import React from 'react';

export default function Footer() {
  return (
    <div className="navbar bg-dark justify-content-center">
      <div className="column">
        <div className="row footer-social-media justify-content-center">
          <ul className="nav">
            <li className="nav-item"><a href="https://twitter.com/lighthouse_labs" target="0"><i className="fa fa-twitter fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://www.facebook.com/lighthouselabsvancouver" target="0"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://plus.google.com/+LighthouselabsCan/posts" target="0"><i className="fa fa-google-plus fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://www.linkedin.com/company/lighthouse-labs" target="0"><i className="fa fa-linkedin fa-2x"></i></a></li>
          </ul>
        </div>
        <div className="row footer-links justify-content-center">
          <ul className="nav">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="https://www.lighthouselabs.ca/contact" target="0">Contact us</a></li>
          </ul>
        </div>
        <div className="row footer-blurb justify-content-center">
          <small>Lighthouse Labs © 2018</small>
        </div>
      </div>
    </div>
  );
}
