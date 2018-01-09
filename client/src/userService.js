import axios from 'axios';

function makeService(token) {
  const ajaxer = token ? axios.create({ headers: {
    Authorization: `Bearer ${token}`,
  } }) : axios;

  function logIn(email, password) {
    return ajaxer.post('/user_token', {
      auth: {
        email,
        password,
      },
    }).then(({ data }) => data);
  }

  function register(first_name, last_name, email, location, motivation, password, password_confirmation) {
    return ajaxer.post('/users', {
      user: { first_name, last_name, email, location, motivation, password, password_confirmation },
    }).then(({ data }) => data);
  }

  function updateUser(first_name, last_name, email, location, motivation, password, password_confirmation) {
    return ajaxer.put('/users', {
      user: { first_name, last_name, email, location, motivation, password, password_confirmation },
    }).then(({ data }) => data);
  }

  function isLoggedIn() {
    return token;
  }

  function saveReview(rating, review, show_flag, course_id) {
    return ajaxer.post('/reviews', {
      review: { rating, review, show_flag, course_id},
    }).then(({ data }) => data);
  };

  function getUserSections() {
    return ajaxer.get('/users').then(({ data }) => data);
  }

  function sectionCompleted(section_id) {
    console.log('SectComp', token);
    return ajaxer.post('/user_sections', {
      user_section: { section_id },
    }).then(({ data }) => data);
  }

  return {
    logIn, isLoggedIn, register, updateUser, saveReview, getUserSections, sectionCompleted
  };
}

export default makeService;