import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        // if ()


        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">Lighthouse Labs</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link className='nav-link' to='/'>Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to='/login'>Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to='/register'>Register</Link>
                    </li>
                </ul>
                </div>
            </nav>
                
        );

    }
}

export default Navbar;