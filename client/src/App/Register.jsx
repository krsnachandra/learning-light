import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <fieldset>
      <legend>Register</legend>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          First name
        </label>
        <div className="col-sm-4">
          <input placeholder="First name" className="form-control input-md" required="" type="text" />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          Last name
        </label>
        <div className="col-sm-4">
          <input placeholder="Last name" className="form-control input-md" required="" type="text" />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          Motivation
        </label>
        <div className="col-sm-4">
          <input placeholder="Why are you learning to code?" className="form-control input-md" required="" type="text" />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          E-mail
        </label>
        <div className="col-sm-4">
          <input placeholder="E-mail address" className="form-control input-md" required="" type="text" />
          <small className="help-block form-text text-muted">We will never hand out your info without your permission.</small>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          Password
        </label>
        <div className="col-sm-4">
          <input placeholder="Password" className="form-control input-md" required="" type="text" />
          <small className="help-block form-text text-muted">
            Not sure how to choose a password? Click <a href="https://www.lifewire.com/choosing-secure-passwords-1174071" target="0">here</a> for ideas.
          </small>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          Confirm
        </label>
        <div className="col-sm-4">
          <input id="textinput" name="textinput" placeholder="Confirm your password" className="form-control input-md" required="" type="text" />
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
        <small>Already registered? <Link to="/login">Log in.</Link></small>
        </div>
      </div>
    </fieldset>
  );
}
