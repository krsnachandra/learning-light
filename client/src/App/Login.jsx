import React, { Component } from 'react';

function Login() {
  return <div>
    <h1>Login</h1>
      <form action="/login" method="post">
          Email <input type="text" name="email" placeholder="Email" /><br />
          Password<input type="text" name="password" placeholder="Password" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>;
}

export default Login;