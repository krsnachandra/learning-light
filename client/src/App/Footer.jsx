import React from 'react';

function Footer() {
  return (

      <footer className="footer-basic-centered">
        <div className="container">
          <h4>Interested in more free content?</h4>
          <form  action="/submit-subscriptions" acceptCharset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
          <input required="required" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" placeholder="E-mail address"  autoComplete="off" type="email" name="subscription[email]" id="subscription_email" />
          <button type="submit" name="commit" data-disable-with="Please wait">Subscribe</button>
        </form>
  			<p className="footer-links">
  				<a href="#">Home</a> | <a href="#">Blog</a> |  <a href="#">About</a> | <a href="#">Contact</a>
  			</p>
  			<p className="footer-company-name">Lighthouse Labs &copy; 2018</p>
      </div>
  		</footer>
  );
}

export default Footer;
