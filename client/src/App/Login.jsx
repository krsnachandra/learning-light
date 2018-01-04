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
  <div>
     <h1>Login</h1>
     <form onSubmit={onSubmit}>
     <fieldset>
     <div className="form-group row">
       <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Email</label>
        <div className="col-sm-4">
          <input placeholder="E-mail address" className="form-control input-md" required="" type="text" />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          Password
        </label>
        <div className="col-sm-4">
          <input placeholder="Password" className="form-control input-md" required="" type="text" />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="singlebutton" />
        <div className="col-sm-1">
          <button id="register-submit" className="btn btn-primary">Submit</button>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="singlebutton" />
        <div className="col-sm-4">
        <small>Need to sign up? <Link to="/register">Register here</Link>!</small>
        </div>
      </div>
    </fieldset>
    </form>
     </div>
   );
}

export default Login;
