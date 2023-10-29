import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
const Navbar = () => {
    const [showNavList,setShowNavList] = useState(false);
    function toggleNavList(){
        console.log('click');
        setShowNavList(!showNavList);
    }
  return (
    <>
        <nav className='nav'>
            <ul className='nav-list' style={{ display: showNavList ? "flex" : null }}>
                <li className='nav-list-item'>
                    <a href="#Home" className='link nav-link'>Home</a>
                </li>
                <li className='nav-list-item'>
                    <a href="#about" className='link nav-link'>About</a>
                </li>
                <li className='nav-list-item'>
                    <a href="#skills" className='link nav-link'>Skills</a>
                </li>
                <li className='nav-list-item'>
                    <a href="#projects" className='link nav-link'>Projects</a>
                </li>
                <li className='nav-list-item'>
                    <a href="#contact" className='link nav-link'>Contact</a>
                </li>
                <li className='nav-list-item'>
                    <a href="#resume" className='link nav-link'>Resume</a>
                </li>
                <li className='nav-list-item'>
                        <button className='btn'>SignUp</button>
                </li>
                <li className='nav-list-item'>
                        <button className='btn'>LogIn </button>
                </li>
            </ul>
            <button
                type="button"
                onClick={toggleNavList}
                className="menu btn--icon nav__hamburger"
                aria-label="toggle navigation"
            >
                { showNavList ? <CgClose /> : <FiMenu />}
            </button>
        </nav>
    </>
  )
}

export default Navbar