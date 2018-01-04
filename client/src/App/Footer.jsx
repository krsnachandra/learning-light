import React from 'react';

function Footer() {
  return (

    <footer className="footer hidden-print" id="global-footer">
      <div className="column">
        <div className="row">
          <div className="col-sm-12">
            <ul className="footer-nav">
              <li className="footer-nav__item">
                <a href="/">
                  Home
                </a>
              </li>
              <li className="footer-nav__item">
                <a data-uv-trigger="true" href="mailto:hello@lighthouselabs.ca">
                  Support
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="footer-copyright">
              © Copyright Lighthouse Labs 2018
            </div>


          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
