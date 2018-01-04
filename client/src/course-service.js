import axios from 'axios';

function delay(by = 2000){
  return new Promise((resolve) => {
    setTimeout(resolve, by);
  });
}

function getInstructors(){
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
export {getCourse, getCourseContent, getInstructors};