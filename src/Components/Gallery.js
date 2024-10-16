import React, { useState } from 'react';
import '../Styles/Gallery.css'; // Import the CSS file
import image1 from '../assets/gallery/Gallery 1.jpg';
import image2 from '../assets/gallery/Gallery 3 V2.jpg';
import image3 from '../assets/gallery/Gallery 4.jpg';

// Define images with their respective column sizes
const images = [
  { id: 1, src: image1, alt: 'Square Image', colSize: 'col-2' },  // 6 columns wide
  { id: 2, src: image2, alt: 'Rectangle Image', colSize: 'col-3' },  // 3 columns wide
  { id: 3, src: image3, alt: 'Another Image', colSize: 'col-3' },  // 4 columns wide
  { id: 4, src: image1, alt: 'Square Image', colSize: 'col-6' },  // 6 columns wide
  { id: 5, src: image2, alt: 'Rectangle Image', colSize: 'col-6' },  // 3 columns wide
  { id: 6, src: image3, alt: 'Another Image', colSize: 'col-4' }  // 4 columns wide
];

const Gallery = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsMaximized(true);
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 300); // Duration of the animation
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 300); // Duration of the animation
    }
  };

  return (
    <div className="container gallery-container">
      <div className="row">
        {images.map((image, index) => (
          <div className={`col ${image.colSize} m-3`} key={image.id}>
            <div 
              className="image-container" 
              onClick={() => handleImageClick(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
              />
              <div className="maximize-icon">⛶</div>
            </div>
          </div>
        ))}
      </div>

      {isMaximized && (
        <div className="maximized-overlay">
          <div className={`maximized-content ${isAnimating ? 'animating' : ''}`}>
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt} 
              className="maximized-image"
            />
            <div className="controls">
              <button onClick={handlePrev} className="prev-button">⬅</button>
              <button onClick={handleNext} className="next-button">➡</button>
            </div>
          </div>
          <div className="close-button" onClick={() => setIsMaximized(false)}>✖</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
