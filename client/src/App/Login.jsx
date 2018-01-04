import React, { Component } from 'react';

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
       <label className="col-sm-1 col-form-label col-form-label-sm" for="textinput">Email</label>
        <div className="col-sm-4">
          <input id="textinput" name="email" placeholder="Email" className="form-control input-md" required="" type="text" />
          <span className="help-block"> </span>
       </div>
     </div>

     <div className="form-group row">
       <label className="col-sm-1 col-form-label col-form-label-sm" for="textinput">Password</label>
       <div className="col-sm-4">
         <input id="textinput" name="password" placeholder="Password" className="form-control input-md" required="" type="text" />
         <span className="help-block"> </span>
       </div>
     </div>

     <div className="form-group row">
       <label className="col-sm-1 col-form-label col-form-label-sm" for="singlebutton"> </label>
       <div className="col-sm-4">
         <button id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button>
       </div>
     </div>
    </fieldset>
    </form>
     </div>
   );
}

export default Login;
