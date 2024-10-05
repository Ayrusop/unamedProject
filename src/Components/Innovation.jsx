import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Innovation.css';
import civil from '../assets/innovation/civil.png'
import projectManagement from '../assets/innovation/project-management.png'
import consultantPlaning from '../assets/innovation/consoltant-planing.png'
import residential from '../assets/innovation/residential.png'
import interior from '../assets/innovation/interior.png'
import { Link } from 'react-router-dom';
const Innovation = () => {
  return (
    <div className="container inovation-area">
       <h1 className='text-center  pb-5'>Innovative Building Solutions</h1>
      <div className="row inovation-items">
       
        {/* First Row */}
        <div className="col-md-4">
          <div className="border p-4 text-left">
            <img src={residential} alt="Placeholder" className="img-fluid mb-2" />
            <h3 className='mt-3'>Residential Construction</h3>
            <p>From custom homes to renovations, we turn
              your vision of a dream home into reality. Goal
              statement align more closely..</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border p-4 text-left">
            <img src={civil} alt="Placeholder" className="img-fluid mb-2" />
            <h3 className='mt-3'>Civil Engineering</h3>
            <p>We provide expertise in areas such as
              transportation, water resource and
              structural engineering.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border p-4 text-left">
            <img src={projectManagement} alt="Placeholder" className="img-fluid mb-2" />
            <h3 className='mt-3'>Project Management</h3>
            <p>We overseas every aspects of your
              construction project to ensure it stays
              on time and within budget.</p>
          </div>
        </div>
      </div>

      <div className="row inovation-items">
        {/* Second Row */}
        <div className="col-md-4">
          <div className="border p-4 text-left">
            <img src={interior} alt="Placeholder" className="img-fluid mb-2" />
            <h3 className='mt-3'>Interior Designing</h3>
            <p>Elevate your space with our interior design
              services, combining aesthetics and
              functionality to create inviting.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border p-4 text-left">
            <img src={consultantPlaning} alt="Placeholder" className="img-fluid mb-2" />
            <h3 className='mt-3'>Consultation and Planning</h3>
            <p>Our experienced team provides expert
              consultation and planning service to help
              you bring your construction.</p>
          </div>
        </div>
        <div className="col-md-4">
        <div className="border p-4 text-center d-flex justify-content-center align-items-center">
           <Link to='/service' style={{textDecoration:'none'}}> <p className='circle text-center'>View All Services ↗</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
