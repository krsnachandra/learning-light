import axios from 'axios';
import React from 'react';

function delay(by = 2000){
  return new Promise((resolve) => {
    setTimeout(resolve, by);
  });
}

function Loading() {
  return <h1>Loading...</h1>;
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
