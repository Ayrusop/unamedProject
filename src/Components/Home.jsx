import React, { useState, useEffect } from 'react';
import '../Styles/Home.css';
import banimg1 from '../assets/imagetitle-img1.png';
import banimg2 from '../assets/imagetitle-img2.png';
import banimg3 from '../assets/imagetitle-img3.png';
import expoImg from '../assets/explore-img.png'
import Innovation from './Innovation';
import CardsSection from './CardsSection';
const Home = () => {
    const [images, setImages] = useState([banimg1, banimg2, banimg3]);
    const [animationClass, setAnimationClass] = useState(['', '', '']);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass(['exiting', 'exiting', 'exiting']);
            setTimeout(() => {
                setImages((prevImages) => [prevImages[2], prevImages[0], prevImages[1]]);
                setAnimationClass(['entering', 'entering', 'entering']);
            }, 500); // Wait for animation to complete

            setTimeout(() => {
                setAnimationClass(['', '', '']);
            }, 1000); // Reset classes after transition
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="banner container-fluid mt-3">
            <div className="row align-items-center">
                {/* Left Section */}
                <div className="col-lg-5 p-3 m-5  main-text-area">
                    <h1>We will help
                        you design your
                        dream home</h1>
                    <p>Every dream starts with a passion and every living start with a dream of perfect life. Here, we are helping you to design your perfect home with best deals.</p>
                    <button className='glb-btn mt-3'>
                        Explore
                    </button>
                </div>
                {/* Right Section */}
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="row">
                        {/* Image Column 1 */}
                        <div className="col-6 d-flex flex-column align-items-start">
                            <img src={images[0]} alt="Image 1" className={`img-fluid mb-2 ${animationClass[0]}`} />
                            <img src={images[1]} alt="Image 2" className={`img-fluid ${animationClass[1]}`} />
                        </div>
                        {/* Image Column 2 */}
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img src={images[2]} alt="Image 3" className={`center-image ban-img img-fluid ${animationClass[2]}`} />
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
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex align-items-center">
                            <img src={expoImg} alt="expoImg" className='col-lg-7' />
                            <div className='col-lg-6 explore-txt-area px-5 main-text-area'>
                                <h1 >Explore & Learn
                                    more About Us</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Interdum id elementum arcu nunc nibh. Ut turpis sed consectetur aliquet ornare condimentum. Nisl euismod elit risus purus. Donec nibh amet bibendum bibendum aliquam sed. Feugiat risus vitae volutpat elementum velit massa nam lobortis in. Urna aenean tortor sed morbi non tristique volutpat est sit. Ultricies enim morbi malesuada magna blandit. Dolor aliquam enim cursus imperdiet
                                    Non lectus sollicitudin egestas diam justo. Amet volutpat scelerisque enim proin eu fringilla quam ullamcorper. Tempus a faucibus vel odio augue tristique malesuada.
                                </p>
                                <button className='glb-btn'>
                                    Explore
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        <section style={{backgroundColor:'#000'}} className='mt-5'>
        <Innovation/>
        </section>
        <section>
            <CardsSection/>
            </section>

        </section>
    )
}

export default Home;
