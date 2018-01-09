import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ loggedIn }) {
  const links = loggedIn ?
    ([<Link to="/logout" className="navbar nav-link">Log out</Link>,
      <Link to="/profile" className="navbar nav-link">Profile</Link>,
      <Link to="/progress" className="navbar nav-link">Progress</Link>]) :
      ([<Link to="/login" className="navbar nav-link">Log In</Link>,
        <Link to="/register" className="navbar nav-link">Register</Link>]);

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="/">Lighthouse Labs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className='nav-link' to='/'>Home
              <span className="sr-only">(current)</span>
              </Link>
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
