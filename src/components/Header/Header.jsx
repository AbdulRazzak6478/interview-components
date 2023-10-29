import React from 'react'
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <>
      <div>
        <header className='header '>
          <h3>
            <a href="#home" className="logo">
            Abdul Razzak
            </a>
          </h3>
          <Navbar />
        </header>
      </div>
    </>
  );
}

export default Header