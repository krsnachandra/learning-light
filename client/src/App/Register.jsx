import React, { Component } from 'react';

function Register() {
  return <div>
    <h1>Register</h1>
      <form action="/register" method="post">
          First name<input type="text" name="fname" placeholder="First name" /><br />
          Last name<input type="text" name="lname" placeholder="Last name" /><br />
          Location<input type="text" name="location" placeholder="Location" /><br />
          Why are you learning to code?<input type="text" name="motivation" placeholder="" /><br />
          Email <input type="text" name="email" placeholder="Email" /><br />
          Password<input type="text" name="password" placeholder="Password" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>;
}

export default Register;