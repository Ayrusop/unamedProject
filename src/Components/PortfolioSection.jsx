import React, { Fragment, useState } from 'react';
import '../Styles/PortfolioSection.css';
import img from '../assets/Rectangle 106 (1).jpg'
import construction from '../assets/portfolio/construction.png'
import cladding from '../assets/portfolio/cladding.png'
import exterior from '../assets/portfolio/exterior.png'
import glading from '../assets/portfolio/glading.png'
import glassInstalion from '../assets/portfolio/glass instalion.png'
import interior from '../assets/portfolio/interior.png'
import lasterProjects from '../assets/portfolio/lasterProjects.jpeg'
import lasterProjects2 from '../assets/portfolio/lasterProjects2.jpeg'
// import jhonDurai from '../assets/portfolio/jhon Durai.png'
import MetaData from '../MetaData';
import image from '../assets/service/icon-5359553_640.webp'
import emailjs from 'emailjs-com'; // Import EmailJS
const PortfolioSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        message: '',
    });
const [phone, setPhone] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
            const emailData = {
                firstName: formData.firstName,
                // lastName: formData.lastName,
                email: formData.email,
                // phone: phone,
                message: formData.message,
            };

        emailjs
        .send(
            'service_062p7zk', // Replace with your service ID
            'template_ss8on92', // Replace with your template ID
            emailData,
            'lo7NpcAZRXrxyPDyE' // Replace with your user ID
        )
        .then(
            (result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({
                    firstName: '',
                    // lastName: '',
                    email: '',
                    message: '',
                    // phone: '',
                    // termsAccepted: false,
                });
                setPhone('');
            },
            (error) => {
                console.log(error.text);
                alert('Failed to send message. Try again.');
            }
        );
    
        // console.log('Form submitted:', formData);
    };
    return (
        <Fragment>
            <MetaData title={"My Profile | SVARG | Smart way to Build and Design your dream Home"} />
            <section style={{ backgroundColor: '#1F2042' }} className='mt-5'>
                <div className="portfolio-section">
                    <div className='container portfolio-container'>
                        <div className="image-container0 mt-5">
                            <img src={img} alt="Portfolio" className="portfolio-image" />
                        </div>
                        <div className="text-container ">
                            <p>Hello there, I am </p>
                            <h2>GOKUL SELVARAJ</h2>
                            <h3>CEO of SVARG Enterprise</h3>
                            <div className='gladText'>
                                <p><b>Glad to have you here,</b> <br />
                                    “Explore my portfolio and discover the stories behind my creations!” </p>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <section className='secondSec'>
                <div className='textInSection'>
                    <p className='text-center sectionText text-section' style={{ color: 'white' }}>
                        "True builders don’t just create structures; they shape dreams into reality for others."
                    </p>
                </div>
            </section>
            <div className='container'>
                <div className='IamText'>
                    <b><p>A BIT ABOUT ME</p> </b>
                    <h2>WHO AM I ?</h2>
                    <p style={{ color: '#8c8c8c' }}>Hi, I’m Gokul Selvaraj, the CEO of SVARG Enterprise, where I transform <br />dreams into reality. With five years of experience in the industry, I specialize <br />in construction, interior, and exterior design, successfully leading multiple <br />projects and driving innovation and excellence in all that I do.</p>
                </div>
                <div className='imageSec mt-5'>
                    <h2>MY WORKS</h2>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <div className="image-container1">
                                <img src={construction} alt='construction' />
                                <div className="image-overlay">
                                    <span>BUILD</span>
                                    <h3>CONSTRUCTION</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="image-container1">
                                <img src={interior} alt='interior' />
                                <div className="image-overlay">
                                    <span>DESIGN</span>
                                    <h3>INTERIOR</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="image-container1">
                                <img src={exterior} alt='exterior' />
                                <div className="image-overlay">
                                    <span>DESIGN</span>
                                    <h3>EXTERIOR</h3>
                                    <div className="banner-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <div className="image-container1">
                                <img src={glassInstalion} alt='glassInstalion' />
                                <div className="image-overlay">
                                    <span>DESIGN</span>
                                    <h3>GLASS INSTALLATION</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="image-container1">
                                <img src={cladding} alt='glading' />
                                <div className="image-overlay">
                                    <span>DESIGN</span>
                                    <h3>CLADDING</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="image-container1">
                                <img src={glading} alt='cladding' />
                                <div className="image-overlay">
                                    <span>DESIGN</span>
                                    <h3>GLAZING</h3>
                                    <div className="banner-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 latestProjects'>
                    <h2>LATEST PROJECTS</h2>
                    <div className="row mt-5">
                        <div className="col ">
                            <img src={lasterProjects} alt='glassInstalion' className='img-fluid' style={{margin:"1%"}}/>
                        </div>
                        <div className="col">
                            <img src={lasterProjects2} alt='glassInstalion' className='img-fluid' style={{height:"76%", width:"100%", margin:"1%"}}/>
                        </div>
                    </div>
                </div>

            </div>
            <section className='testimnial-area mt-5' style={{ backgroundColor: '#1F2042' }}>
                <div className='container tetimonial'>
                    <h2 className='mt-2'>WHAT CLIENTS SAY!</h2>

                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className='card'>
                                <p>“</p>
                                <span>Exceptional attention to detail; <br />our project exceeded expectations</span>
                                <img src={image} alt='' />
                                <h3 className='mt-3'><b>Dhanush</b></h3>
                                {/* <span>Business Owner</span> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className='card'>
                                <p>“</p>
                                <span>Professional, innovative, and a true pleasure to work with!</span>
                                <img src={image} alt='' />
                                <h3 className='mt-3'><b>Rahul</b></h3>
                                {/* <span>Chief Accountant</span> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className='card'>
                                <p>“</p>
                                <span>SVARG Enterprise delivered on time and with remarkable quality.</span>
                                <img src={image} alt='' />
                                <h3 className='mt-3'><b>Vignesh</b></h3>
                                {/* <span>Sales Manager</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container formPart'>
                <h2>CONTACT </h2>
                <div className="row mt-5 form-content">
                    <div className="col formPart-left">
                        <h3 className='mt-'>Do you have any project?
                            <br /> Let’s Talk! </h3>
                        <p className='mt-2'>Visit our website to know More about us:</p>
                        <p style={{ fontSize: '20px' }}><b>www.svargenterprise.com</b></p>
                        <p className='mt-2'>Mobile:</p>
                        <p style={{ fontSize: '20px' }}><b>+91 98434 35875</b></p>
                        <p className='mt-2'>E-mail:</p>
                        <p style={{ fontSize: '20px' }}><b>enterprisesvarg@gmail.com</b></p>
                        <p className='mt-2'>Address:</p>
                        <p style={{ fontSize: '20px' }}><b>Flat 2,
                            SA Avenue,,
                            Muthu Nagar,
                            Eswar park,
                            Thudiyalur,
                            Coimbatore - 641034.</b></p>
                    </div>
                    <div className="col form-section">
                        <form onSubmit={handleSubmit} >
                            <div className="form-row">
                                <div className="input-data mt-5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="underline"></div>
                                    <label>Enter your name</label>
                                </div>

                            </div>
                            <div className="form-row">
                                <div className="input-data mt-5">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="underline"></div>
                                    <label>Enter a valid Email address</label>
                                </div>

                            </div>
                            <div className="form-row">
                                <div className="input-data textarea mt-5">
                                    <textarea
                                        rows="8"
                                        cols="80"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <br />
                                    <div className="underline"></div>
                                    <label>Enter your message</label>
                                </div>
                            </div>
                            <center>
                                <button type="submit" className="btn btn-submit1 mt-5 text-center">Submit</button>
                            </center>

                        </form>
                    </div>
                </div>

            </div>
        </Fragment>

    );
}

export default PortfolioSection;
