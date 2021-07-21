import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <div id='Nav-Header'>
        <h1>Curriculum Crater</h1>
        <nav className='navbar'>
          <ul>
            <li className='current'><a href='#'>Home</a></li>
            <li><a href='#'>Curriculums</a></li>
            <li><a href='#'>Sources</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;