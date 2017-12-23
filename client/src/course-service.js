import axios from 'axios';

function delay(by = 2000){
  return new Promise((resolve) => {
    setTimeout(resolve, by);
  });
}

function getCourse(coursename){
  return delay().then(() => {
    return {
      title: 'Intro to being Awesome',
      author: {
        name: 'Joel Shinness Who Is Awesome'
      },
      chapters: []
    }
  })
}

function getCourseContent(coursename, section){
  return delay().then(() => {
    return {

    }
  })
}
export {getCourse};