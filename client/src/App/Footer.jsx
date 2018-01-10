import React from 'react';

export default function Footer() {
  return (
    <div className="navbar footer bg-dark">
    <div class="col-sm-6 col-lg-3">
      <div className="row d-flex justify-content-start">
        <ul className="nav">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="https://www.lighthouselabs.ca/contact" target="0">Contact us</a></li>
        </ul>
      </div>
      <div className="row d-flex justify-content-start">
        <ul className="nav">
          <li className="nav-item"><a href="https://twitter.com/lighthouse_labs" target="0"><i className="fa fa-twitter fa-2x"></i></a></li>
          <li className="nav-item"><a href="https://www.facebook.com/lighthouselabsvancouver" target="0"><i className="fa fa-facebook fa-2x"></i></a></li>
          <li className="nav-item"><a href="https://plus.google.com/+LighthouselabsCan/posts" target="0"><i className="fa fa-google-plus fa-2x"></i></a></li>
          <li className="nav-item"><a href="https://www.linkedin.com/company/lighthouse-labs" target="0"><i className="fa fa-linkedin fa-2x"></i></a></li>
        </ul>
      </div>
      <div className="row footer-blurb d-flex justify-content-start">
          Lighthouse Labs © 2018
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div className="row footer-links footer-blurb d-flex justify-content-end">
        <ul className="nav">
          <li className="nav-item">Made with <i class="fa fa-heart" aria-hidden="true"></i> by</li>
        </ul>
      </div>
      <div className="row d-flex justify-content-end">
        <ul className="nav footer-icons">
          <li><a href="https://github.com/vanastassiou"><img src="/portrait-va.jpg" className="rounded-circle icon-portrait" /></a></li>
          <li><a href="https://github.com/conniechoi89"><img src="/portrait-cc.jpg" className="rounded-circle icon-portrait" /></a></li>
          <li><a href="https://github.com/krsnachandra"><img src="/portrait-cm.jpg" className="rounded-circle icon-portrait" /></a></li>
        </ul>
      </div>
    </div>
</div>
);
}
