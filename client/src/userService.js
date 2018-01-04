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
      user: { first_name, last_name, email, location, motivation, password, password_confirmation},
    }).then(({ data }) => data);
  }

  function isLoggedIn() {
    return token;
  }
  return {
    logIn, isLoggedIn, register,
  };
}

export default makeService;