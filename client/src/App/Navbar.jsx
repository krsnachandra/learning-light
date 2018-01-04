import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ loggedIn }) {
  const links = loggedIn ?
    (<Link to="/logout" className="nav-item nav-link">Log Out</Link>) :
    ([<Link to="/login" className="nav-item nav-link">Log In</Link>,
      <Link to="/register" className="nav-item nav-link">Register</Link>]);

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Lighthouse Labs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className='nav-link' to='/'>Home <span className="sr-only">(current)</span></Link>
          </li>
          <div className="nav">
            {links}
          </div>
        </ul>
        </div>
      </nav>
    );
  }

export default Navbar;
