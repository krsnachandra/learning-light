import axios from 'axios';

function getUserId(token) {
  return axios.get(`/reviews`)
    .then( (response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
};

function review(rating, review, show_flag, course_id, user_id) {
  return axios.post('/reviews', {
    reviews: { rating, review, show_flag, course_id, user_id },
  }).then(({ data }) => data);
};


export {getUserId, review};