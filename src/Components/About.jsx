import React, { Fragment } from 'react'
import passionate from '../assets/about-page/passinoate.png'
import motive from '../assets/about-page/motive.png'
import vission from '../assets/about-page/vision.png'
import mission from '../assets/about-page/mission.png'
import '../Styles/About.css'
import Counts from './Counts'
import ourTeam from '../assets/about-page/ourTeam.png'

const About = () => {
    return (
        <Fragment>
            <div className="container">
            <div className="row  img-textarea">
                <div className='row mt-5'>
                    <div className="col">
                        <h2 className='abt-head'>Passionate
                            and Sustainable</h2>
                        <p>At SVRAG Enterprise, we bring over two years of expertise in transforming spaces with exceptional interior and exterior design solutions. Our passion lies in crafting beautiful and functional environments for homes and buildings, blending creativity with precision to reflect our clients’ unique visions. Whether you're looking to revitalize your living space or enhance the façade of your property, our dedicated team delivers innovative designs and meticulous attention to detail. Trust SVRAG Enterprise to turn your ideas into inspiring realities.   </p>
                    </div>
                    <div className="col">
                        <img src={passionate} alt={passionate} className='img-fluid' />
                    </div>
                </div>

                <div className="w-100 mt-5"></div>
                <div className="col ">
                    <img src={motive} alt={motive} className='img-fluid' />
                </div>
                <div className="col">
                    <h2 className='abt-head'>Our Motive</h2>
                    <p>At SVRAG Enterprise, our motive is to elevate every space into a work of art. We believe that great design transforms not just the physical environment, but also the way you experience and interact with it. Our goal is to blend creativity with functionality, crafting interiors and exteriors that are both aesthetically pleasing and practical. We are driven by the passion to exceed expectations and create environments where beauty meets purpose, enhancing the quality of life for all our clients.</p>
                </div>
            </div>
            <div className='abt-center-text'>
                <h2 className='abt-head1 text-center mt-5'>Our Vision & Mission Statements</h2>
                <p className=' text-center'>“To be the leading provider of custom home building services in the region, known for our commitment to quality and customer satisfaction.”</p>
            </div>

            <div className="row p-5">
                <div className="col text-center">
                   <div>
                    <img src={vission} alt="vission" className='img-fluid vis-miss-img'/>
                   </div>
                   <div className='abt-center-text1'>
                    <p className='p-3'>“To craft innovative and functional design solutions that elevate and transform spaces, enhancing the quality of life for our clients”.</p>
                   </div>
                </div>
                <div className="col text-center">
                <div>
                    <img src={mission} alt="mission" className='img-fluid vis-miss-img'/>
                   </div>
                   <div className='abt-center-text1'>
                    <p className='p-3'>“To craft innovative and functional design solutions that elevate and transform spaces, enhancing the quality of life for our clients”.</p>
                   </div>
                </div>
            </div>
            <Counts/>
            
        </div>
        <div className="row  img-textarea mt-5 our-team">
                <div className="w-100 mt-5"></div>
                <div className="col ">
                    <img src={ourTeam} alt={ourTeam} className='img-fluid' />
                </div>
                <div className="col">
                    <h2 className='abt-head text-center '>Our Team</h2>
                    <p>At SVRAG Enterprise, our team comprises talented and experienced professionals passionate about design and construction. Each member brings unique expertise in areas such as architecture, interior design, project management, and engineering. We prioritize collaboration and creativity, ensuring that every project reflects our clients' vision and needs. Our commitment to continuous learning and innovation keeps us at the forefront of industry trends. Together, we strive to deliver exceptional results that transform spaces and exceed client expectations..</p>
                </div>
            </div>
        </Fragment>
        

    )
}

export default About