import axios from 'axios';
import React from 'react';

function delay(by = 2000){
  return new Promise((resolve) => {
    setTimeout(resolve, by);
  });
}

function Loading() {
  return (
    <div className="card-body">
      <h1>Now loading...</h1>
      <img src="/loading.gif"/>
    </div>
  )
}

function getAllCourses(){
  return axios.get(`/courses`)
    .then( (response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
}

function getCourse(coursename){
  return axios.get(`/${coursename}`)
    .then( (response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
}

function getCourseContent(coursename, sectionname){
  return axios.get(`/${coursename}/${sectionname}`)
    .then( (response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
}
export {getCourse, getCourseContent, getAllCourses, Loading};
