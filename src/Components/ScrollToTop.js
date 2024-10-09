import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Make sure to install react-icons if not already installed
import '../Styles/ScrollToTop.css'; // Import the CSS file for styling

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrolledPercentage = (scrollPosition / totalHeight) * 100;

    setScrollPercentage(scrolledPercentage);
    setShowButton(scrollPosition > 300); // Show button after scrolling 300px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <div className="circle" style={{ background: `conic-gradient(#1F2042 ${scrollPercentage}%, #ddd ${scrollPercentage}%)` }}>
            <FaArrowUp size={20} color="#fff" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
