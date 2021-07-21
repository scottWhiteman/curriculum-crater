import React from 'react';
import Navbar from '../Navbar/Navbar';

import './Homepage.css';

import Search from '../Search/Search';

const Homepage = () => {
  return (
    <div id='Homepage'>
      <div className='container'>
        <h1>Lorem, ipsum dolor</h1>
        <section className='recent'>
          <ul>
            <li>
              <div className='placeholder curr'></div>
              <div className='placeholder curr'></div>
              <div className='placeholder curr'></div>
              <div className='placeholder curr'></div>
              <div className='placeholder curr'></div>
              <div className='placeholder curr'></div>
            </li>
          </ul>
        </section>
        <section className='homepage-showcase'>
          <div className='container flex'>
            <div className='placeholder'></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima odio cumque ea tempore quo, optio magni architecto illo eveniet tempora natus ut aliquam alias distinctio quibusdam totam. Hic, vel!</p>
          </div>
          <div className='container flex'>
            <div className='placeholder'></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima odio cumque ea tempore quo, optio magni architecto illo eveniet tempora natus ut aliquam alias distinctio quibusdam totam. Hic, vel!</p>
          </div>
          <div className='container flex'>
            <div className='placeholder'></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima odio cumque ea tempore quo, optio magni architecto illo eveniet tempora natus ut aliquam alias distinctio quibusdam totam. Hic, vel!</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;