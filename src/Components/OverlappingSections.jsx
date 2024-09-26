import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/OverlappingSections.css'; // Create styles here

const OverlappingSections = () => {
  const location = useLocation();

  return (
    <div className="overlapping-sections">
      {/* First Overlapping Section - Hide if on Contact page */}
      {location.pathname !== '/contact' && (
        <div className="section-one">
          <h2 className='mb-5 text-center' >Have any queries? Drop us a message</h2>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button>Send message</button>
          </div>
        </div>
      )}

      {/* Second Overlapping Section: only visible on Contact page */}
      {location.pathname === '/contact' && (
        <div className="section-two ">
          <h3 className='text-left'>READY TO GET</h3>
          <h3 className='text-left'> OUR NEW STUFF?</h3>
          <div className='input-container1'>
            <div className="input-container2">
              <input type="email" placeholder="Your Email" />
              <button>Contact Us</button>
            </div>
            <div>
              <h4 className='text-white'>Homes and Needs</h4>
              <p className="info-text mt-2">We’ll listen to your needs, identify the best approach and then
                create a bespoke smart changing solution that’s right for you. </p>
            </div>
          </div>


        </div>
      )}
    </div>
  );
}

export default OverlappingSections;
