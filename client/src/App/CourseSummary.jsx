import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PublishedReviews from './PublishedReviews';

export default function CourseSummary () {
  return (
    <div>
    <h2>
        Related courses:
    </h2>
    <div>
      Javascript Essentials Part II
    </div>

    <h2>
      Course Details
    </h2>
    <div>
      <p>
        In this free course, you'll be learning how to build your own web-based chat app similar to Twitch or Slack using JavaScript and other modern tools like Node.js and Web Sockets. The goal of this course is to introduce you to the fundamentals of building web-based applications using some of the most prominent and widely used programming technologies! </p><p>If you're new to programming, we recommend you start with our <a href="http://lighthouse-labs.thinkific.com/courses/html-and-css" target="_blank">HTML & CSS Essentials</a> course.
        </p>
    </div>
    <div>
      <h2>
        Instructor
      </h2>
    </div>
    <div>
      <img src='https://s3.amazonaws.com/thinkific/instructors/000/046/9561488219777.small.png?1488219777' alt='David VanDusen' class='instructor__img' />
    </div>
    <div>
      David VanDusen
    </div>
    <div>
      Web Developer & Instructor
    </div>
    <div>
      <p>David is a sort of web dev Don Quixote, helping out wherever he is needed. He has grappled with his share of technological windmills yet continues his chivalrous fight for clean, beautiful code. That said, David is a renaissance man and pursues fine arts and music in his leisure.</p>
    </div>
    <div>
      <h3>
        Reviews (1)
      </h3>
      <h4>
        5 Stars! Thee Beste Course That Ever Coursed
      </h4>
        by Geoffrey Chaucer
      </div>
    </div>);
  }
