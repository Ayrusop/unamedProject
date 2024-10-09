import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons
import '../Styles/Footer.css';
import OverlappingSections from './OverlappingSections';
import logo from '../assets/logo.png'; 
import { FaWhatsapp } from 'react-icons/fa6';
const Footer = () => {
    return (
        <>
            <footer className="mainfooter" role="contentinfo">
         <OverlappingSections/>
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                {/* Column1 */}
                                <div className="footer-pad">
                                <img src={logo} alt='logo' style={{width:'100%', height:'100%'}}/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* Column2 */}
                                <div className="footer-pad">
                                    <h4>Navigation</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">News & Events</a></li>
                                        <li><a href="#">Projects</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* Column3 */}
                                <div className="footer-pad">
                                    <h4>Projects</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Running Projects</a></li>
                                        <li><a href="#">Completed Projects</a></li>
                                        <li><a href="#">Coming Soon</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4>Follow Us</h4>
                                <ul className="social-network social-circle">
                                    <li><a href="#" className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><FaLinkedin /></a></li>
                                    <li><a href="#" className="icoInstagram" title="Instagram"><FaInstagram /></a></li>
                                    <li><a href="#" className="icoWhatsapp" title="Instagram"><FaWhatsapp /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy">
                                <p className="text-center">&copy; Copyright 2024 - Company Name. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default Footer;
