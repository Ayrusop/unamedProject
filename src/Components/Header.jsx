import React, { useState } from 'react';
import '../Styles/Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="mainLogo" alt="main-logo" style={{ width: "100%", height: '100%' }} />
      </div>
      <div className={`nav-items ${menuOpen ? 'show-nav' : ''}`} id="nav-container">
        <div className="nav-close">
          <h3 onClick={handleMenuToggle}>&#10539;</h3>
        </div>
        <div className="nav">
        <Link to='/' style={{ textDecoration: 'none' }} className=''><span className="nav-link">Home</span></Link> 
        </div>
        <div className="nav">
        <Link to='/aboutus' style={{ textDecoration: 'none' }}><span className="nav-link">About Us</span></Link> 
        {/* <h3>About Us</h3> */}
        </div>
        <div className="nav">
        <Link to='/service' style={{textDecoration:'none'}}><span className="nav-link"> Service</span></Link> 
          {/* <h3>Servie</h3> */}
        </div>
        <div className="nav">
        <Link to='/contact' style={{ textDecoration: 'none' }}><span className="nav-link">Contact Us</span></Link> 
          {/* <h3>Contact Us</h3> */}
        </div>
        <div className="nav">
        <Link to='/getquote'  style={{ textDecoration: 'none' }}><button className='glb-btn m-2'>Learn More</button></Link> 
        </div>
      </div>
      <div className="menu-icon">
        <h3 onClick={handleMenuToggle}>&#9776;</h3>
      </div>
    </div>
  );
};

export default Header;
