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
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <Link to='/service'><a className="nav-link" href="#">Service</a> </Link>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Get Quote</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
