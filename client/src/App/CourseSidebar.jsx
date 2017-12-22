import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

export default function CourseSidebar({coursename}) {
  return (
  <div>
    <h5><Link to={`/${coursename}/intro`}>Introduction <span className='text-success'>{'\u2714'}</span></Link></h5>
    <ul>
      <li>Intro</li>
      <li>Section 2</li>
      <li>Section 3</li>
      <li>Section 4</li>
      <li>Section 5</li>
    </ul>
    <h5>Chapter 2</h5>
    <h5>Chapter 3</h5>
    <h5>Chapter 4</h5>
    <h5>Chapter 5</h5>
    <h5>Chapter 6</h5>
  </div>
);
}
