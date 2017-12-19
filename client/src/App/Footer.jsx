import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

function Footer() {
  return (
    <footer class="footer">
      <div class="pre-footer">
        <div class="container">
          <div class="footer-content">
            <h4>Interested in workshops, <nobr>courses, and free content?</nobr></h4>
            <form class="subscribe-form" action="/submit-subscriptions" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
              <input required="required" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" placeholder="E-mail Address" class="prompt" autocomplete="off" type="email" name="subscription[email]" id="subscription_email" />
              <button type="submit" name="commit" data-disable-with="Please Wait" class="btn btn-text ghost-btn ghost-secondary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="container footer-list">
          <div class="footer-column">
            <p>
              <span class="blue-text">Programs</span>
            </p>
            <ul>
              <li><a title="Web Development Bootcamp" href="/web-bootcamp">Web Development Bootcamp</a></li>
              <li><a title="iOS Development Bootcamp" href="/ios-bootcamp">iOS Development Bootcamp</a></li>
              <li><a title="Intro to Web Development" href="/intro-to-web">Intro to Web Development</a></li>
              <li><a title="Intro to iOS Development " href="/intro-to-ios">Intro to iOS Development </a></li>
              <li><a title="Front-End Fundamentals with Javascript " href="/front-end-javascript">Front-End Fundamentals with Javascript </a></li>
            </ul>
          </div>
        <div class="footer-column">
          <p>
            <span class="blue-text">Locations</span>
          </p>
            <ul>
              <li><a title="Vancouver" href="/vancouver">Vancouver</a></li>
              <li><a title="Toronto" href="/toronto">Toronto</a></li>
              <li><a title="Calgary" href="/calgary">Calgary</a></li>
              <li><a title="Montreal" href="/montreal">Montreal</a></li>
              <li><a title="Victoria" href="/victoria">Victoria</a></li>
              <li><a title="Halifax" href="/halifax">Halifax</a></li>
              <li><a title="Other locations" href="/other-locations">Other locations</a></li>
           </ul>
        </div>
        <div class="footer-column">
          <p>
            <span class="blue-text">Students</span>
          </p>
          <ul>
            <li><a title="Admissions" href="/admissions">Admissions</a></li>
            <li><a title="Student experience" href="/students">Student experience</a></li>
            <li><a title="Career services" href="/career-services">Career services</a></li>
            <li><a title="Student outcomes" href="/studentoutcomes">Student outcomes</a></li>
            <li><a title="Web &amp; iOS Curriculum" href="/lighthouse-labs-curriculum">Web &amp; iOS curriculum</a></li>
            <li><a title="Student projects" href="/projects">Student projects</a></li>
            <li><a title="Events" href="/events">Events</a></li>
            <li><a title="Blog" href="/blog">Blog</a></li>
            <li><a title="FAQ" href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <p>
            <span class="blue-text">About us</span>
          </p>
          <ul>
            <li> <a title="Our Story" href="/about">Our story</a></li>
            <li> <a title="Careers at LHL" href="/careers-at-lhl">Careers at LHL</a></li>
            <li> <a title="Community" href="/community">Community</a></li>
            <li> <a title="Team" href="/team">Team</a></li>
            <li> <a title="Press" href="/press">Press</a></li>
            <li> <a title="Employers" href="/employers">Employers</a></li>
            <li> <a title="Contact" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <img id="larry" alt="Rubber Duck Debugging" src="/assets/Larry-christmas-0cbcf63162c517077f3a1948747641647de469162e4c8b3ed8bc9262b8b1f6d2.png" />
          <div id="disappearing-larry" data-url="/assets/larry-disappear-bffa2ff7b6b8f4d18c8488ced1a7e5aa6206dedb62843837967ed0561d25b8cd.gif"></div>
        </div>
      </div>
      <div class="container">
      <hr>
      <p class="footer-copyright">
        © 2017 Lighthouse Labs
      </p>

      <div class="footer-socialmedia">
        <a href="https://twitter.com/lighthouse_labs" target="_blank">
        <svg x="0px" y="0px" viewBox="0 0 30.2 30.2" enable-background="new 0 0 30.2 30.2" xml:space="preserve">
          <path fill="#FFFFFF" d="M15.1,0c2.1,0,4.1,0.4,5.9,1.2C22.9,2,24.5,3,25.8,4.4c1.4,1.4,2.4,3,3.2,4.8c0.8,1.8,1.2,3.8,1.2,5.9
    c0,2.1-0.4,4.1-1.2,5.9c-0.8,1.8-1.9,3.4-3.2,4.8c-1.4,1.4-3,2.4-4.8,3.2c-1.8,0.8-3.8,1.2-5.9,1.2c-2.1,0-4.1-0.4-5.9-1.2
    c-1.8-0.8-3.4-1.9-4.8-3.2c-1.4-1.4-2.5-3-3.2-4.8C0.4,19.1,0,17.2,0,15.1C0,13,0.4,11,1.2,9.2C2,7.4,3.1,5.8,4.4,4.4
    C5.8,3,7.4,2,9.2,1.2C11.1,0.4,13.1,0,15.1,0z M23.3,10.8C23,10.9,22.7,11,22.5,11c-0.3,0.1-0.6,0.1-0.9,0.2
    c0.3-0.2,0.6-0.4,0.8-0.7c0.2-0.3,0.4-0.6,0.6-0.9c-0.3,0.1-0.6,0.3-1,0.4c-0.3,0.1-0.7,0.2-1.1,0.3C20.7,10,20.3,9.7,20,9.5
    c-0.4-0.2-0.8-0.3-1.2-0.3c-0.8,0-1.5,0.3-2.2,0.9c-0.6,0.6-0.9,1.3-0.9,2.2c0,0.2,0,0.4,0.1,0.7c-1.3-0.1-2.5-0.4-3.6-0.9
    c-1.1-0.6-2-1.3-2.8-2.3c-0.3,0.5-0.4,1-0.4,1.5c0,1.1,0.4,2,1.3,2.5c-0.5,0-1-0.1-1.4-0.3v0c0,0.7,0.2,1.4,0.7,2
    c0.5,0.6,1,0.9,1.7,1.1c-0.1,0-0.2,0.1-0.4,0.1c-0.1,0-0.3,0-0.5,0c-0.1,0-0.3,0-0.5-0.1c0.2,0.6,0.5,1.1,1,1.5
    c0.5,0.4,1.1,0.6,1.8,0.6c-1.1,0.9-2.4,1.3-3.8,1.3H8.4c0.7,0.4,1.4,0.8,2.2,1c0.8,0.2,1.6,0.4,2.5,0.4c1.4,0,2.7-0.3,3.7-0.8
    c1.1-0.5,2-1.2,2.7-2c0.7-0.8,1.3-1.8,1.7-2.8c0.4-1,0.6-2.1,0.6-3.1v-0.4c0.3-0.2,0.6-0.5,0.9-0.8C22.9,11.3,23.1,11,23.3,10.8z"/>
        </svg>
        </a>
        <a href="https://www.facebook.com/lighthouselabsvancouver" target="_blank">
        <svg x="0px" y="0px" viewBox="0 0 30.2 30.2" enable-background="new 0 0 30.2 30.2" xml:space="preserve">
          <path fill="#FFFFFF" d="M15.1,30.2c-2.1,0-4.1-0.4-5.9-1.2c-1.8-0.8-3.4-1.9-4.8-3.2c-1.4-1.4-2.4-3-3.2-4.8C0.4,19.2,0,17.2,0,15.1
    c0-2.1,0.4-4.1,1.2-5.9C2,7.4,3.1,5.8,4.4,4.4c1.4-1.4,3-2.5,4.8-3.2C11.1,0.4,13,0,15.1,0c2.1,0,4.1,0.4,5.9,1.2
    c1.8,0.8,3.4,1.9,4.8,3.2c1.4,1.4,2.4,3,3.2,4.8c0.8,1.8,1.2,3.8,1.2,5.9c0,2.1-0.4,4.1-1.2,5.9c-0.8,1.8-1.9,3.4-3.2,4.8
    c-1.4,1.4-3,2.4-4.8,3.2C19.2,29.8,17.2,30.2,15.1,30.2z M11.2,15.6h2.2v6.8h2.8v-6.8H19v-2.8h-2.8v-1.4c0-0.2,0.1-0.4,0.2-0.6
    c0.1-0.2,0.2-0.3,0.4-0.3H19V7.8h-2.2c-0.9,0-1.7,0.4-2.4,1.1c-0.7,0.7-1,1.6-1,2.6v1.4h-2.2V15.6z"/>
        </svg>
        </a>
        <a href="https://www.linkedin.com/company/lighthouse-labs" target="_blank">
        <svg x="0px" y="0px" viewBox="0 0 30.2 30.2" enable-background="new 0 0 30.2 30.2" xml:space="preserve">
          <path fill="#FFFFFF" d="M15.1,30.2c-2.1,0-4.1-0.4-5.9-1.2c-1.8-0.8-3.4-1.9-4.8-3.2c-1.4-1.4-2.4-3-3.2-4.8C0.4,19.1,0,17.1,0,15
    C0,13,0.4,11,1.2,9.2C2,7.3,3.1,5.7,4.4,4.4c1.4-1.4,3-2.4,4.8-3.2C11.1,0.4,13,0,15.1,0c2.1,0,4.1,0.4,5.9,1.2
    c1.8,0.8,3.4,1.9,4.8,3.2c1.4,1.4,2.5,3,3.2,4.8c0.8,1.8,1.2,3.8,1.2,5.9c0,2.1-0.4,4.1-1.2,5.9c-0.8,1.8-1.9,3.4-3.2,4.8
    c-1.4,1.4-3,2.5-4.8,3.2C19.2,29.8,17.2,30.2,15.1,30.2z M10.9,6.5C10.4,6.5,10,6.7,9.7,7C9.4,7.3,9.2,7.7,9.2,8.2
    c0,0.5,0.2,0.8,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5c0.5,0,0.8-0.2,1.2-0.5c0.3-0.3,0.5-0.7,0.5-1.2c0-0.5-0.2-0.9-0.5-1.2
    C11.7,6.7,11.3,6.5,10.9,6.5z M12.2,10.8H9.5V20h2.7V10.8z M13.5,20h2.7v-5.9c0.2-0.2,0.4-0.4,0.7-0.5c0.2-0.1,0.4-0.1,0.7-0.2
    c0.3,0,0.5,0,0.8,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.2,0.2,0.3,0.2,0.5V20h2.6v-5.6c0-0.6-0.2-1.2-0.5-1.8c-0.3-0.6-0.8-1-1.3-1.3
    c-0.5-0.3-1.1-0.4-1.7-0.4c-0.6,0-1.2,0.1-1.7,0.3v-0.4h-2.7V20z"/>
        </svg>
        </a>
        <a href="https://plus.google.com/+LighthouselabsCan/posts" target="_blank">
        <svg x="0px" y="0px" viewBox="0 0 30.2 30.2" enable-background="new 0 0 30.2 30.2" xml:space="preserve">
          <path fill="#FFFFFF" d="M15.1,30.2c-2.1,0-4.1-0.4-5.9-1.2c-1.8-0.8-3.4-1.9-4.8-3.2c-1.4-1.4-2.4-3-3.2-4.8C0.4,19.1,0,17.2,0,15.1
    C0,13,0.4,11,1.2,9.2C2,7.3,3.1,5.7,4.4,4.4c1.4-1.4,3-2.4,4.8-3.2C11.1,0.4,13,0,15.1,0c2.1,0,4.1,0.4,5.9,1.2
    c1.8,0.8,3.4,1.9,4.8,3.2c1.4,1.4,2.4,3,3.2,4.8c0.8,1.8,1.2,3.8,1.2,5.9c0,2.1-0.4,4.1-1.2,5.9c-0.8,1.8-1.9,3.4-3.2,4.8
    c-1.4,1.4-3,2.5-4.8,3.2C19.2,29.8,17.2,30.2,15.1,30.2z M12.5,15.7c0,0.5,0.1,0.9,0.3,1.2c-0.5,0.3-0.9,0.6-1.1,1.1
    c-0.3,0.4-0.4,0.9-0.4,1.4c0,0.8,0.4,1.5,1.1,2.1c0.7,0.6,1.7,0.9,2.8,0.9c1.1,0,2-0.3,2.8-0.9c0.7-0.6,1.1-1.3,1.1-2.1
    c0-0.8-0.4-1.5-1.1-2.1c-0.7-0.6-1.7-0.9-2.8-0.9h-0.3c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.1,0-0.2,0-0.4c0-0.2,0-0.2,0.1-0.2h0.1
    c0.9,0,1.6-0.3,2.3-0.9c0.6-0.6,0.9-1.4,0.9-2.3c0-0.2,0-0.5-0.1-0.7c-0.1-0.2-0.2-0.4-0.3-0.5l1.1-0.6V7.8l-2.3,1.3
    C16.2,9,16,8.8,15.7,8.7c-0.3-0.1-0.6-0.2-0.9-0.2c-0.9,0-1.6,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.3c0,0.5,0.1,1,0.3,1.4
    c0.2,0.4,0.5,0.8,0.9,1.1C12.6,14.7,12.5,15.2,12.5,15.7z M14.9,13.3c-0.4,0-0.8-0.1-1.1-0.4c-0.3-0.3-0.5-0.6-0.5-1.1
    c0-0.4,0.2-0.8,0.5-1.1c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.1,0.8-0.5,1.1
    C15.7,13.2,15.3,13.3,14.9,13.3z M15.1,20.5c-0.5,0-0.9-0.1-1.2-0.3c-0.3-0.2-0.5-0.5-0.5-0.8c0-0.3,0.2-0.6,0.5-0.8
    c0.3-0.2,0.7-0.3,1.2-0.3c0.5,0,0.9,0.1,1.2,0.3c0.3,0.2,0.5,0.5,0.5,0.8c0,0.3-0.2,0.6-0.5,0.8C16,20.4,15.6,20.5,15.1,20.5z"/>
        </svg>
        </a>
      </div>
  );
}

export default Footer;
