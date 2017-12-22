import React, { Component } from 'react';

export default function Login() {
  return (
  <div>
     <h1>Login</h1>
     <fieldset>
     <div class="form-group row">
       <label class="col-sm-1 col-form-label col-form-label-sm" for="textinput">Email</label>
        <div class="col-sm-4">
          <input id="textinput" name="email" placeholder="Email" class="form-control input-md" required="" type="text" />
          <span class="help-block"> </span>
       </div>
     </div>

     <div class="form-group row">
       <label class="col-sm-1 col-form-label col-form-label-sm" for="textinput">Password</label>
       <div class="col-sm-4">
         <input id="textinput" name="password" placeholder="Password" class="form-control input-md" required="" type="text" />
         <span class="help-block"> </span>
       </div>
     </div>

     <div class="form-group row">
       <label class="col-sm-1 col-form-label col-form-label-sm" for="singlebutton"> </label>
       <div class="col-sm-4">
         <button id="singlebutton" name="singlebutton" class="btn btn-primary">Submit</button>
       </div>
     </div>
    </fieldset>
     </div>
   );
}
