import React, { useState, useEffect, Fragment } from 'react';
import '../Styles/Home.css';
import banimg1 from '../assets/imagetitle-img1.png';
import banimg2 from '../assets/imagetitle-img2.png';
import banimg3 from '../assets/imagetitle-img3.png';
import expoImg from '../assets/explore-img.png'
import Innovation from './Innovation';
import CardsSection from './CardsSection';
import { Link } from 'react-router-dom';
import centerImg1 from '../assets/center-img.png'
import centerImg2 from '../assets/center-img2.png'
import centerImg3 from '../assets/center-img3.png'
import MetaData from '../MetaData';
const Home = () => {
    const [images, setImages] = useState([banimg1, banimg2, banimg3]);


    return (
        <Fragment>
            <MetaData title={"Discover | SVARG"} />
            <section className="banner container-fluid mt-3">
            <div className="container mt-5 align-items-center d-flex flex-column flex-lg-row main-sec">
                {/* Left Section */}
                <div className="col-lg-5 main-text-area">
                    <h1 className=''>We will help <br />you design your <br /> dream home</h1>
                    <p className='mt-3'>Every dream starts with a passion and every living starts with a dream of perfect life. Here, we are helping you to design your perfect home with best deals.</p>
                    <button className='glb-btn m-2'>Learn More</button>
                </div>

                {/* Right Section */}
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className="row">
                        {/* Image Column 1 */}
                        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                            <img src={images[0]} alt="Image 1" className={`center-image mb-2`} />
                            <img src={images[1]} alt="Image 2" className={`center-image`} />
                        </div>
                        {/* Image Column 2 */}
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src={images[2]} alt="Image 3" className={`center-image ban-img  m-2`} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex align-items-center">
                            <hr class="flex-grow-1 col-lg-2" />
                            <h2 class="px-3 text-center col-lg-8 cen-txt">SMART WAY TO BUILD AND DESIGN YOUR DREAM HOME
                                WITH US!</h2>
                            <hr class="flex-grow-1 col-lg-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src={expoImg} alt="expoImg" class="center-image" />
                    </div>
                    <div class="col-md-6">
                        <div class="px-3 px-md-5 main-text-area">
                            <h2>Explore & Learn more About Us</h2>
                            <p>
                            SVARG Enterprise is a dynamic design firm specializing in both interior and exterior solutions for residential and commercial spaces. With over two years of experience, the company is dedicated to delivering high-quality, innovative designs that enhance the aesthetic and functional aspects of every project. Our team combines creativity with precision to create spaces that are not only visually stunning but also practical and tailored to our clients’ needs. At SVARG Enterprise, we are committed to turning your vision into a beautifully designed reality, ensuring every detail reflects your unique style and requirements.
                            </p>
                            <Link className='link-tag' to='./contact'>
                                <button className='glb-btn'>
                                    Explore
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <section style={{ backgroundColor: '#000' }} className='mt-5'>
                <Innovation />
            </section>
            <section>
                <div className="row mt-5 no-gutters"> {/* Use no-gutters to remove padding */}
                    <div className="col-sm d-flex justify-content-center"> {/* Center align the images */}
                        <img src={centerImg1} alt="centerImg1" className="center-image" />
                    </div>
                    <div className="col-sm d-flex justify-content-center">
                        <img src={centerImg2} alt="centerImg2" className="center-image" />
                    </div>
                    <div className="col-sm d-flex justify-content-center">
                        <img src={centerImg3} alt="centerImg3" className="center-image" />
                    </div>
                </div>
            </section>



            <section>
                <CardsSection />
            </section>

        </section>
        </Fragment>
        
    )
}

export default Home;
