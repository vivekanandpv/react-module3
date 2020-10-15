import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExampleDefault'
          aria-controls='navbarsExampleDefault'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact/London' className='nav-link'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sssss' className='nav-link'>
                Gibberish
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/playground' className='nav-link'>
                Axios Playground
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
