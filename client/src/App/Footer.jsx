import React from 'react';

function Footer() {
  return (

    <footer class="footer hidden-print" id="global-footer">
      <div class="column">
        <div class="row">
          <div class="col-sm-12">
            <ul class="footer-nav">
              <li class="footer-nav__item">
                <a href="/">
                  Home
                </a>
              </li>
              <li class="footer-nav__item">
                <a data-uv-trigger="true" href="mailto:hello@lighthouselabs.ca">
                  Support
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="footer-copyright">
              © Copyright Lighthouse Labs 2018
            </div>


          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
