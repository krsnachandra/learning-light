import axios from 'axios';
import React from 'react';

function makeCourseService(token){
  const ajaxer = token ? axios.create({ headers: {
    Authorization: `Bearer ${token}`,
  } }) : axios;

  function getAllCourses(){
    return ajaxer.get(`/courses`)
      .then( ({data}) => data)
  }

  function getCourse(coursename){
    return ajaxer.get(`/${coursename}`)
      .then( (response) => {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function getCourseContent(coursename, sectionname){
    return ajaxer.get(`/${coursename}/${sectionname}`)
      .then( (response) => {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  return {getCourse, getCourseContent, getAllCourses};
}
export {makeCourseService};
