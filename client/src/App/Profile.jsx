import React from 'react';
import { Link } from 'react-router-dom';

function Profile({ loggedIn, onLogin, updateUser, history }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const first_name = e.target.elements.first_name.value;
    const last_name = e.target.elements.last_name.value;
    const email = e.target.elements.email.value;
    const location = e.target.elements.location.value;
    const motivation = e.target.elements.motivation.value;
    const password = e.target.elements.password.value;
    const passwordConfirm = e.target.elements.passwordConfirm.value;
    updateUser(first_name, last_name, email, location, motivation, password, passwordConfirm)
      .then((data) => {
        onLogin(data.jwt);
        history.push('/progress');
      });
  };

  return (
    <div className="col-sm-10 offset-sm-1 text-center card-body">
      <form onSubmit={onSubmit} className="justify-content-center row">
        <fieldset>
          <div className="form-group row">
            <label className="col-sm-2"/>
            <div className="col-sm-10">
              <legend>Profile</legend>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">First name</label>
            <div className="col-sm-9">
              <input className="form-control input-md" required="" type="text" name="first_name" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Last name</label>
            <div className="col-sm-9">
              <input className="form-control input-md" required="" type="text" name="last_name" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Location</label>
            <div className="col-sm-9">
              <input className="form-control input-md" name="location" required="" type="text" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Motivation</label>
            <div className="col-sm-9">
              <input className="form-control input-md" required="" type="text" name="motivation" />
              <small className="help-block form-text text-muted">Tell us about why you'd like to learn to code.</small>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">E-mail</label>
            <div className="col-sm-9">
              <input className="form-control input-md" required="" type="text" name="email" />
              <small className="help-block form-text text-muted">We will never hand out your info without your permission.</small>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <input type="password" className="form-control input-md" required="" name="password" />
              <small className="help-block form-text text-muted">Need help choosing a secure password? <br/> Click <a href="https://www.lifewire.com/choosing-secure-passwords-1174071" target="0">here</a> for ideas.
            </small>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label" />
            <div className="col-sm-9">
              <input type="password" placeholder="Confirm password" className="form-control input-md" required="" name="passwordConfirm" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2"/>
            <div className="col-sm-10">
              <button id="register-submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

        </fieldset>
      </form>
     </div>
  );
}

export default Profile;
