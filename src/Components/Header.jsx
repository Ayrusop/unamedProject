import React, { useState } from 'react';
import logo from '../assets/dummy-logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="mainLogo" alt="main-logo" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to='/' style={{textDecoration:'none'}}><a className="nav-link">Home</a> </Link>
            </li>
            <li className="nav-item">
            <Link to='/aboutus' style={{textDecoration:'none'}}><a className="nav-link">About Us</a> </Link>
            </li>
            <li className="nav-item">
              <Link to='/service' style={{textDecoration:'none'}}><a className="nav-link">Service</a> </Link>
              
            </li>
            <li className="nav-item">
            <Link to='/contact' style={{textDecoration:'none'}}><a className="nav-link">Contact</a> </Link>
            </li>
            <li className="nav-item">
             <Link to='/getquote' style={{textDecoration:'none'}}><a className="nav-link" href="#">Get Quote</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
