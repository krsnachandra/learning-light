import React from 'react';

export default function Register() {
  return (
    <div>
    <h1>Register</h1>
    <fieldset>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">First Name</label>
        <div className="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your First Name" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Last Name</label>
        <div className="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Last Name" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Location</label>
        <div className="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Location" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Motivation</label>
        <div className="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Why are you learning to code?" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Email</label>
        <div className="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Email" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Password</label>
        <div className="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Password" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Confirm Password</label>
        <div className="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Confirm your Password" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="singlebutton"> </label>
        <div className="col-sm-4">
          <button id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </fieldset>
  </div>
  );
}
