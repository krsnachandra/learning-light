import React, { Component } from 'react';

function Login() {
  return <div>
     <h1>Login</h1>
     <fieldset>
     <div class="form-group">
       <label class="col-md-4 control-label" for="textinput">Email</label>  
       <div class="col-md-4">
       <input id="textinput" name="email" placeholder="Email" class="form-control input-md" required="" type="text" />
       <span class="help-block"> </span>  
       </div>
     </div>
 
     <div class="form-group">
       <label class="col-md-4 control-label" for="textinput">Password</label>  
       <div class="col-md-4">
       <input id="textinput" name="password" placeholder="Password" class="form-control input-md" required="" type="text" />
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

export default Login;