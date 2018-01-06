import React from 'react';

export default function Footer() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <footer>
      <div className="text-center">
        {/* <div className="form">
          <form className="form-inline my-2 my-lg-0" action="/subscribe" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" />
            <input className="form-control mr-sm-2" type="text" required="required" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" placeholder="E-mail address" autoComplete="off" type="email" name="subscription[email]" id="subscription_email" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit" name="commit" data-disable-with="Please wait...">Subscribe</button>
          </form>
        </div> */}
        <div className="mx-auto">
          <ul className="nav">
            <li className="nav-item"><a href="https://twitter.com/lighthouse_labs" target="0"><i className="fa fa-twitter fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://www.facebook.com/lighthouselabsvancouver" target="0"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://plus.google.com/+LighthouselabsCan/posts" target="0"><i className="fa fa-google-plus fa-2x"></i></a></li>
            <li className="nav-item"><a href="https://www.linkedin.com/company/lighthouse-labs" target="0"><i className="fa fa-linkedin fa-2x"></i></a></li>
          </ul>
        </div>
        <div className="row text-center navbar-text">
          <ul className="menu list-inline">
            <li className="list-inline-item"><a className="btn btn-link" href="/">Home</a></li>
            <li className="list-inline-item"><a className="btn btn-link" href="https://www.lighthouselabs.ca/contact" target="0">Contact us</a></li>
          </ul>
        </div>
        <div className="row text-center">
          <div className="container">
            <div>
              <p>Lighthouse Labs © 2018</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
