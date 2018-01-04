import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <fieldset>
      <legend>Log in</legend>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">
          E-mail
        </label>
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
        <small>Need to sign up? <Link to="/register">Log in.</Link></small>
        </div>
      </div>
    </fieldset>
  );
}
