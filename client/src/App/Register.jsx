import React, { Component } from 'react';

export default function Register() {
  return (
    <div>
    <h1>Register</h1>
    <fieldset>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="textinput">First Name</label>
        <div class="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your First Name" class="form-control input-md" required="" type="text" />
        <span class="help-block"> </span>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="textinput">Last Name</label>
        <div class="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Last Name" class="form-control input-md" required="" type="text" />
        <span class="help-block"> </span>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="textinput">Location</label>
        <div class="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Location" class="form-control input-md" required="" type="text" />
        <span class="help-block"> </span>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="textinput">Motivation</label>
        <div class="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Why are you learning to code?" class="form-control input-md" required="" type="text" />
        <span class="help-block"> </span>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="textinput">Email</label>
        <div class="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Email" class="form-control input-md" required="" type="text" />
        <span class="help-block"> </span>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="textinput">Password</label>
        <div class="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Insert your Password" class="form-control input-md" required="" type="text" />
        <span class="help-block"> </span>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="textinput">Confirm Password</label>
        <div class="col-sm-4">
        <input id="textinput" name="textinput" placeholder="Confirm your Password" class="form-control input-md" required="" type="text" />
        <span class="help-block"> </span>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label col-form-label-sm" for="singlebutton"> </label>
        <div class="col-sm-4">
          <button id="singlebutton" name="singlebutton" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </fieldset>
  </div>
  );
}
