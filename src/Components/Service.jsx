import React, { Fragment } from 'react'
import '../Styles/Service.css'
import designAndPlaning from '../assets/service/Design-planing.png'
import buildindRenovation from '../assets/service/building-renovation.png'
import interriorDesign from '../assets/service/interior-design.png'
import constructionService from '../assets/service/construction service.png'
import documentation from '../assets/service/documentation.png'
import professionalSupport from '../assets/service/professional-support.png'
import ServiceItems from './Services-items'
import image from '../assets/service/icon-5359553_640.webp'
import plan from '../assets/service/plan.png'
import design from '../assets/service/design.png'
import buillding from '../assets/service/building.png'
import finish from '../assets/service/finish.png'
import MetaData from '../MetaData'
const Service = () => {
    return (
        <Fragment>
            <MetaData title={'Service | SVARG'} />
            <div className="banner-container1">
                <div className='container contents text-left'>
                    <div className='content-list'>

                        <h1 className="banner-heading">WE PROVIDE A WIDE RANGE <br />OF SERVICE</h1>
                    </div>
                </div>

            </div>
            <div className='container'>
                <ServiceItems />
                <div className="row  img-textarea">
                    <div className='row mt-5'>
                        <div className="col">
                            <p className='wel'>WELCOME TO </p>
                            <h2 className='abt-head'>SVARG Enterprise</h2>
                            <div className="banner-line" />
                        </div>
                        <div className="col abt-svrag">
                            <p>SVARG Enterprise specializes in transforming spaces through innovative exterior and interior design solutions. Our team of skilled professionals is dedicated to creating harmonious environments that reflect our clients’ unique styles and functional needs. From residential homes to commercial properties, we offer tailored design services that enhance aesthetics while ensuring practicality and comfort. We pride ourselves on our collaborative approach, working closely with clients to understand their vision and bring it to life.</p>
                            <p>
                                At SVARG Enterprise, project management is a cornerstone of our service delivery. We oversee every aspect of the design process, from initial concept development to final installation, ensuring timelines and budgets are met.
                            </p>
                            <button className='glb-btn mt-5'>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-center m-5 we-offer'>
                <h3>WE OFFER</h3>
                <h2><b>OUR BEST SERVICE</b></h2>
                <center>
                    <div className="banner-line text-center" />
                </center>
            </div>

            <div class="container img-fluid">
                <div class="row">
                    <div class="col-sm d-flex  ">
                        <div className='m-2'>
                            <img src={designAndPlaning} alt={designAndPlaning} />
                        </div>
                        <div className='m-2'>
                            <h4>DESIGN & PLANNING</h4>
                            <p>Design and planning involve creating detailed layouts and concepts to optimize space functionality and aesthetics for any environment.</p>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div className='m-2'>
                            <img src={buildindRenovation} alt={buildindRenovation} />
                        </div>
                        <div className='m-2'>
                            <h4>BUILDING RENOVATION</h4>
                            <p>Encompasses the process of upgrading, restoring, or repurposing existing structures to improve their functionality, aesthetics, and overall value.</p>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div className='m-2'>
                            <img src={interriorDesign} alt={interriorDesign} />
                        </div>
                        <div className='m-2'>
                            <h4>INTERIOR DESIGN</h4>
                            <p>Enhancing the interior of a space to achieve a healthier and more aesthetically pleasing environment, focusing on layout, color.</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm d-flex">
                        <div className='m-2'>
                            <img src={constructionService} alt={constructionService} />
                        </div>
                        <div className='m-2'>
                            <h4>CONSTRUCTION SERVICES</h4>
                            <p>Construction services involve the planning, execution, and management of building projects, including residential, commercial, and industrial structures.</p>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div className='m-2'>
                            <img src={documentation} alt={documentation} />
                        </div>
                        <div className='m-2'>
                            <h4>DOCUMENTATION</h4>
                            <p>Documentation to the process of creating and organizing detailed records, plans, and specifications for projects, ensuring clear communication.</p>
                        </div>
                    </div>
                    <div class="col-sm d-flex">
                        <div className='m-2'>
                            <img src={professionalSupport} alt={professionalSupport} />
                        </div>
                        <div className='m-2'>
                            <h4>PROFESSIONAL SUPPORT</h4>
                            <p>Expert guidance and assistance in various areas, such as design, project management, and regulatory compliance, to ensure successful execution..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row p-5 mt-5">
                <div class="col">
                    <img src={plan} alt="plan" />
                    <div className='p-3'>
                        <h3 className=''>PLANNING</h3>
                    <p className=''>Developing a strategic approach to project goals, timelines, and resource allocation to ensure a successful design and construction process.</p>
                    </div>
                    
                </div>
                <div class="col">
                    <img src={design} alt="design" />
                    <div className='p-3'>
                        <h3 className=''>DESIGNING</h3>
                    <p className=''>Translating concepts into visual representations, focusing on aesthetics, functionality, and user experience to create cohesive spaces.</p>
                    </div>
                </div>
                <div class="col">
                    <img src={buillding} alt="plan" />
                    <div className='p-3'>
                        <h3 className=''>BUILDING</h3>
                    <p className=''>Executing the construction process, where designs are realized through the assembly of materials and coordination of labor to create physical structures.</p>
                    </div>
                </div>
                <div class="col">
                    <img src={finish} alt="plan" />
                    <div className='p-3'>
                        <h3 className=''>FINISH</h3>
                    <p className=''>Adding final touches and details that enhance a space, including paint, fixtures, and furnishings, to ensure the completed project meets both aesthetic and functional standards.</p>
                    </div>
                </div>
            </div>
            <section className='mt-5 testimonal-section p-3'>
                <div className='text-center'>
                    <h3 className='mt-5'>TESTIMONIALS</h3>
                    <h2>WHAT THEY SAY ABOUT US</h2>
                    <center>
                        <div className="banner-line1 text-center mt-2" />
                    </center>
                </div>


                <div class="row ">
                    <div class="col-sm">
                        <div className="testimonial-container mb-5">
                            <p className="testimonial-text">“From concept to completion, SVARG Enterprise exceeded our expectations. Their expertise in both interior and exterior design is unmatched, and they truly listen to their clients' needs.”</p>
                            <img className="testimonial-image" src={image} alt="Testimonial" />
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="testimonial-container mb-5">
                            <p className="testimonial-text">“Working with SVARG Enterprise was a fantastic experience. Their team is professional, attentive, and incredibly skilled. They turned our outdated office into a modern, functional workspace that we are proud of.”</p>
                            <img className="testimonial-image" src={image} alt="Testimonial" />
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="testimonial-container mb-5">
                            <p className="testimonial-text">“SVARG Enterprise transformed our home beyond our expectations. Their attention to detail and creative vision truly brought our ideas to life. We couldn’t be happier with the results!”</p>
                            <img className="testimonial-image" src={image} alt="Testimonial" />
                        </div>
                    </div>
                </div>


                <div>
                </div>
            </section>
            
        </Fragment>


    )
}

export default Service
