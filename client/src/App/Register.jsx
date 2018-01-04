import React from 'react';

function Register({ onLogin, register, history }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const first_name = e.target.elements.first_name.value;
    const last_name = e.target.elements.last_name.value;
    const email = e.target.elements.email.value;
    const location = e.target.elements.location.value;
    const motivation = e.target.elements.motivation.value;
    const password = e.target.elements.password.value;
    const passwordConfirm = e.target.elements.passwordConfirm.value;
    register(first_name, last_name, email, location, motivation, password, passwordConfirm)
      .then((data) => {
        onLogin(data.jwt);
        history.push('/');
      });
  };

  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={onSubmit}>
    <fieldset>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">First Name</label>
        <div className="col-sm-4">
        <input id="textinput" name="first_name" placeholder="Insert your First Name" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Last Name</label>
        <div className="col-sm-4">
        <input id="textinput" name="last_name" placeholder="Insert your Last Name" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Location</label>
        <div className="col-sm-4">
        <input id="textinput" name="location" placeholder="Insert your Location" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Motivation</label>
        <div className="col-sm-4">
        <input id="textinput" name="motivation" placeholder="Why are you learning to code?" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Email</label>
        <div className="col-sm-4">
        <input id="textinput" name="email" placeholder="Insert your Email" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Password</label>
        <div className="col-sm-4">
        <input id="textinput" name="password" placeholder="Insert your Password" className="form-control input-md" required="" type="text" />
        <span className="help-block"> </span>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm" for="textinput">Confirm Password</label>
        <div className="col-sm-4">
        <input id="textinput" name="passwordConfirm" placeholder="Confirm your Password" className="form-control input-md" required="" type="text" />
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
    </form>
  </div>
  );
}

export default Register;