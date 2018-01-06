import React from 'react';
import { Link } from 'react-router-dom';

function Login({ onLogin, logIn, history }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    logIn(email, password)
    .then((data) => {
      onLogin(data.jwt);
      history.push('/');
    });
  };
  return (
    <div className="col-sm-10 offset-sm-1 text-center card-body">
      <form onSubmit={onSubmit} className="justify-content-center row">
        <fieldset>
          <div className="form-group row">
            <label className="col-sm-2"/>
            <div className="col-sm-10">
              <legend>Login</legend>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">E-mail</label>
            <div className="col-sm-9">
              <input placeholder="E-mail address" className="form-control input-md" required="" type="text" name="email" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <input type="password" placeholder="Password" className="form-control input-md" required="" name="password" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2"/>
            <div className="col-sm-10">
              <button id="login-submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2" />
            <div className="col-sm-10">
            <small>Need to sign up? <Link to="/register">Register here</Link>!</small>
          </div>

          </div>
        </fieldset>

      </form>
     </div>
   );
}

export default Login;
