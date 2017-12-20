import React, { Component } from 'react';

function Register() {
  return <div>
    <h1>Register</h1>
    <fieldset>
    <div class="form-group">
      <label class="col-md-4 control-label" for="textinput">First Name</label>  
      <div class="col-md-4">
      <input id="textinput" name="textinput" placeholder="Insert your First Name" class="form-control input-md" required="" type="text" />
      <span class="help-block"> </span>  
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="textinput">Last Name</label>  
      <div class="col-md-4">
      <input id="textinput" name="textinput" placeholder="Insert your Last Name" class="form-control input-md" required="" type="text" />
      <span class="help-block"> </span>  
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="textinput">Location</label>  
      <div class="col-md-4">
      <input id="textinput" name="textinput" placeholder="Insert your Location" class="form-control input-md" required="" type="text" />
      <span class="help-block"> </span>  
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="textinput">Motivation</label>  
      <div class="col-md-4">
      <input id="textinput" name="textinput" placeholder="Why are you learning to code?" class="form-control input-md" required="" type="text" />
      <span class="help-block"> </span>  
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="textinput">Email</label>  
      <div class="col-md-4">
      <input id="textinput" name="textinput" placeholder="Insert your Email" class="form-control input-md" required="" type="text" />
      <span class="help-block"> </span>  
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="textinput">Password</label>  
      <div class="col-md-4">
      <input id="textinput" name="textinput" placeholder="Insert your Password" class="form-control input-md" required="" type="text" />
      <span class="help-block"> </span>  
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="textinput">Confirm Password</label>  
      <div class="col-md-4">
      <input id="textinput" name="textinput" placeholder="Confirm your Password" class="form-control input-md" required="" type="text" />
      <span class="help-block"> </span>  
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="singlebutton"> </label>
      <div class="col-md-4">
        <button id="singlebutton" name="singlebutton" class="btn btn-primary">Submit</button>
      </div>
    </div>
    </fieldset>
    </div>;
}

export default Register;