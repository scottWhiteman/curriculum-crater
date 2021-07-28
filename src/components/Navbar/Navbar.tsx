import React from 'react';

import { NavLink } from 'react-router-dom'

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <div id='Nav-Header'>
        <h1>Curriculum Crater</h1>
        <nav className='navbar'>
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                activeClassName='current'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/curriculums'
                activeClassName='current'
              >
                Curriculums
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sources'
                activeClassName='current'
              >
                Sources
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;