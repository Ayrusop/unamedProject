import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/CardsSection.css';

const CardsSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* First row with two cards */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-box">
            <div className="card-body p-5">
              <h2>What we do?</h2>
              <span style={{color:'#8c8c8c'}}>
              We specialize in both interior and exterior design, offering tailored solutions to create your ideal living space. Our team transforms your vision into reality with personalized design and customization. From concept to completion, we ensure your home reflects your unique style and needs.
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-box">
            <div className="card-body p-5">
              <h2>How we do?</h2>
              <span style={{color:'#8c8c8c'}}>
              We start with a detailed consultation to understand your vision and requirements. Our team then crafts custom designs and oversees every step of the implementation. Finally, we deliver a finished space that perfectly reflects your style and functional needs.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {/* Second row with one centered card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-box">
            <div className="card-body p-5">
              <h2>Why we do ?</h2>
              <span style={{color:'#8c8c8c'}}>
              We’re passionate about creating spaces that enhance your lifestyle and reflect your personal style. Designing and customizing homes is our way of turning your dreams into reality, providing satisfaction and joy. Our dedication stems from a commitment to delivering exceptional, personalized results that make every project unique.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
