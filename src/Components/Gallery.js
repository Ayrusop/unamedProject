import React, { useState,Fragment } from 'react';
import '../Styles/Gallery.css';
import MetaData from '../MetaData';

//Construction finished
import constructionFinished1 from '../assets/gallery/construction finished/FB_IMG_1728307893756.jpg';
import constructionFinished2 from '../assets/gallery/construction finished/FB_IMG_1728307896482.jpg';
import constructionFinished3 from '../assets/gallery/construction finished/FB_IMG_1728307975000.jpg';
import constructionFinished4 from '../assets/gallery/construction finished/FB_IMG_1728308425134.jpg';
import constructionFinished5 from '../assets/gallery/construction finished/FB_IMG_1728308443718.jpg';
import constructionFinished6 from '../assets/gallery/construction finished/FB_IMG_1728321440916.jpg';
import constructionFinished7 from '../assets/gallery/construction finished/FB_IMG_1728320995436.jpg';
import constructionFinished8 from '../assets/gallery/construction finished/FB_IMG_1728321100237.jpg';
import constructionFinished9 from '../assets/gallery/construction finished/FB_IMG_1728321332334.jpg';
import constructionFinished10 from '../assets/gallery/construction finished/FB_IMG_1728321383518.jpg';

//Construction Ongoing
import constructionOngoing1 from '../assets/gallery/Construction Ongoing/FB_IMG_1728307820119.jpg';
import constructionOngoing2 from '../assets/gallery/Construction Ongoing/FB_IMG_1728307822782.jpg';
import constructionOngoing3 from '../assets/gallery/Construction Ongoing/FB_IMG_1728307841558.jpg';
import constructionOngoing4 from '../assets/gallery/Construction Ongoing/FB_IMG_1728308119710.jpg';
import constructionOngoing5 from '../assets/gallery/Construction Ongoing/FB_IMG_1728308343658.jpg';
import constructionOngoing6 from '../assets/gallery/Construction Ongoing/FB_IMG_1728320778381.jpg';
import constructionOngoing7 from '../assets/gallery/Construction Ongoing/FB_IMG_1728321017286.jpg';

// Construction Yet to Start
import constructionYetToStart1 from '../assets/gallery/Construction yet to start/FB_IMG_1728307797709.jpg';
import constructionYetToStart2 from '../assets/gallery/Construction yet to start/FB_IMG_1728307802579.jpg';
import constructionYetToStart3 from '../assets/gallery/Construction yet to start/FB_IMG_1728320825953.jpg';
import constructionYetToStart4 from '../assets/gallery/Construction yet to start/FB_IMG_1728320836635.jpg';

//wood interior
import woodInterior1 from '../assets/gallery/wood interior/IMG-20240508-WA0023.jpg';
import woodInterior2 from '../assets/gallery/wood interior/IMG-20240508-WA0024.jpg';
import woodInterior3 from '../assets/gallery/wood interior/IMG-20240508-WA0025.jpg';
import woodInterior4 from '../assets/gallery/wood interior/IMG-20240508-WA0030.jpg';
import woodInterior5 from '../assets/gallery/wood interior/IMG-20240508-WA0036.jpg';
import woodInterior6 from '../assets/gallery/wood interior/IMG-20240508-WA0037.jpg';
import woodInterior7 from '../assets/gallery/wood interior/IMG-20240508-WA0040.jpg';
import woodInterior8 from '../assets/gallery/wood interior/IMG-20240508-WA0041.jpg';
import woodInterior9 from '../assets/gallery/wood interior/IMG-20240508-WA0065.jpg';

// ALUMINIUM INTERIOR
import aluminium1 from '../assets/gallery/aluminium/IMG-20230826-WA0006 (1).jpg';
import aluminium2 from '../assets/gallery/aluminium/IMG-20240508-WA0038 (1).jpg';
import aluminium3 from '../assets/gallery/aluminium/IMG-20240508-WA0038 (1).jpg';
import aluminium4 from '../assets/gallery/aluminium/IMG-20240508-WA0058 (1).jpg';
import aluminium5 from '../assets/gallery/aluminium/IMG-20240508-WA0059 (1).jpg';
import aluminium6 from '../assets/gallery/aluminium/IMG-20241014-WA0011 (1).jpg';
import aluminium7 from '../assets/gallery/aluminium/IMG-20241014-WA0012 (1).jpg';
import aluminium8 from '../assets/gallery/aluminium/images (1) (1).jpeg';
import aluminium9 from '../assets/gallery/aluminium/images (3) (1).jpeg';
import aluminium10 from '../assets/gallery/aluminium/indecorslides-interiors-ahmed-nagar-hyderabad-aluminium-partition-contractors-ouwgul8nz3 (1).jpg';

// LOUVERS
import lovers1 from '../assets/gallery/LOUVERS/images (10).jpeg';
import lovers2 from '../assets/gallery/LOUVERS/images (11).jpeg';
import lovers3 from '../assets/gallery/LOUVERS/images (12).jpeg';
import lovers4 from '../assets/gallery/LOUVERS/images (14).jpeg';
import lovers5 from '../assets/gallery/LOUVERS/images (16).jpeg';
import lovers6 from '../assets/gallery/LOUVERS/images (18).jpeg';
import lovers7 from '../assets/gallery/LOUVERS/images (19).jpeg';
import lovers8 from '../assets/gallery/LOUVERS/images (20).jpeg';
import lovers9 from '../assets/gallery/LOUVERS/images (21).jpeg';
import lovers10 from '../assets/gallery/LOUVERS/images (9).jpeg';

// bathroom glass partition
import bathroomglassPartition1 from '../assets/gallery/Bathroom glass partition/IMG-20240306-WA0015.jpg';
import bathroomglassPartition2 from '../assets/gallery/Bathroom glass partition/IMG-20240306-WA0033.jpg';
import bathroomglassPartition3 from '../assets/gallery/Bathroom glass partition/IMG-20241001-WA0006.jpg';
import bathroomglassPartition4 from '../assets/gallery/Bathroom glass partition/IMG-20241001-WA0008.jpg';
import bathroomglassPartition5 from '../assets/gallery/Bathroom glass partition/IMG-20241001-WA0016.jpg';
import bathroomglassPartition6 from '../assets/gallery/Bathroom glass partition/IMG-20241001-WA0017.jpg';
import bathroomglassPartition7 from '../assets/gallery/Bathroom glass partition/IMG-20241001-WA0049.jpg';
import bathroomglassPartition8 from '../assets/gallery/Bathroom glass partition/IMG_20240429_205349_0293.jpg';

// office Glass
import officeglassPartition1 from '../assets/gallery/office Glass/IMG-20240306-WA0007.jpg';
import officeglassPartition2 from '../assets/gallery/office Glass/IMG-20240306-WA0010.jpg';
import officeglassPartition3 from '../assets/gallery/office Glass/IMG-20240619-WA0002.jpg';
import officeglassPartition4 from '../assets/gallery/office Glass/IMG-20241001-WA0007.jpg';
import officeglassPartition5 from '../assets/gallery/office Glass/IMG-20241001-WA0077.jpg';
import officeglassPartition6 from '../assets/gallery/office Glass/IMG-20241009-WA0011.jpg';
import officeglassPartition7 from '../assets/gallery/office Glass/IMG-20241009-WA0015.jpg';
import officeglassPartition8 from '../assets/gallery/office Glass/IMG-20241009-WA0016.jpg';

//pergola glass
import pergolaGlass1 from '../assets/gallery/Pergola glass/IMG-20241001-WA0013.jpg';
import pergolaGlass2 from '../assets/gallery/Pergola glass/IMG-20241001-WA0079.jpg';
import pergolaGlass3 from '../assets/gallery/Pergola glass/IMG-20241001-WA0030.jpg';
import pergolaGlass4 from '../assets/gallery/Pergola glass/IMG-20241001-WA0032.jpg';
import pergolaGlass5 from '../assets/gallery/Pergola glass/IMG-20241001-WA0044.jpg';
import pergolaGlass6 from '../assets/gallery/Pergola glass/IMG-20241001-WA0054.jpg';
import pergolaGlass7 from '../assets/gallery/Pergola glass/IMG-20241001-WA0058.jpg';
import pergolaGlass8 from '../assets/gallery/Pergola glass/IMG-20241001-WA0065.jpg';
import pergolaGlass9 from '../assets/gallery/Pergola glass/IMG-20241001-WA0066.jpg';
import pergolaGlass10 from '../assets/gallery/Pergola glass/IMG-20241009-WA0018.jpg';
import pergolaGlass11 from '../assets/gallery/Pergola glass/IMG-20241001-WA0079.jpg';

// Balcony railing
import balconyRailing1 from '../assets/gallery/Balcony railing/IMG-20241001-WA0040.jpg';
import balconyRailing2 from '../assets/gallery/Balcony railing/IMG-20241001-WA0043.jpg';
import balconyRailing3 from '../assets/gallery/Balcony railing/IMG-20241001-WA0055.jpg';
import balconyRailing4 from '../assets/gallery/Balcony railing/IMG-20241001-WA0062.jpg';
import balconyRailing5 from '../assets/gallery/Balcony railing/IMG-20241001-WA0070.jpg';
import balconyRailing6 from '../assets/gallery/Balcony railing/IMG-20241001-WA0076.jpg';
import balconyRailing7 from '../assets/gallery/Balcony railing/IMG-20241009-WA0023.jpg';
import balconyRailing8 from '../assets/gallery/Balcony railing/IMG-20241009-WA0025.jpg';
import balconyRailing9 from '../assets/gallery/Balcony railing/IMG-20241009-WA0026.jpg';
import balconyRailing10 from '../assets/gallery/Balcony railing/IMG-20241009-WA0027.jpg';

//Step railing
import steprailing1 from '../assets/gallery/Step railing/IMG-20241001-WA0074.jpg';
import steprailing2 from '../assets/gallery/Step railing/IMG-20241009-WA0003.jpg';
import steprailing3 from '../assets/gallery/Step railing/IMG-20241009-WA0004.jpg';
import steprailing4 from '../assets/gallery/Step railing/IMG-20241009-WA0005.jpg';
import steprailing5 from '../assets/gallery/Step railing/IMG-20241009-WA0024.jpg';
import steprailing6 from '../assets/gallery/Step railing/IMG-20241009-WA0028.jpg';
import steprailing7 from '../assets/gallery/Step railing/IMG-20241009-WA0029.jpg';
import steprailing8 from '../assets/gallery/Step railing/IMG-20241009-WA0031.jpg';

//ACP CLADDING
import acp1 from '../assets/gallery/ACP/IMG-20240701-WA0006 (1).jpg';
import acp2 from '../assets/gallery/ACP/IMG-20240701-WA0007 (1).jpg';
import acp3 from '../assets/gallery/ACP/IMG_20240509_131322515 (1).jpg';
import acp4 from '../assets/gallery/ACP/images (2) (1).jpeg';
import acp5 from '../assets/gallery/ACP/images (4) (1).jpeg';
import acp6 from '../assets/gallery/ACP/images (5) (1).jpeg';
// import acp7 from '../assets/gallery/ACP/images (19).jpeg';
import acp8 from '../assets/gallery/ACP/product-jpeg-500x500 (1) (1).jpg';
import acp9 from '../assets/gallery/ACP/product-jpeg-500x500 (1).png';
import acp10 from '../assets/gallery/ACP/product-jpeg-500x500 (2) (1).jpg';
import acp11 from '../assets/gallery/ACP/product-jpeg-500x500 (3).jpg';

//Glazing
import glazing1 from '../assets/gallery/glazing/IMG-20240119-WA0009.jpg';
import glazing2 from '../assets/gallery/glazing/IMG-20240531-WA0006.jpg';
import glazing3 from '../assets/gallery/glazing/IMG-20240701-WA0008.jpg';
import glazing4 from '../assets/gallery/glazing/IMG-20241016-WA0022.jpg';
import glazing5 from '../assets/gallery/glazing/images (12) (1).jpeg';
import glazing6 from '../assets/gallery/glazing/images (13).jpeg';
import glazing7 from '../assets/gallery/glazing/images (14) (1).jpeg';

const galleryData = [
  {
    category: "CONSTRUCTION",
    subcategories: [
      {
        name: "CONSTRUCTION FINISHED",
        images: [
          { src: constructionFinished1, alt: 'Image 1', colSize: 'col-4' },
          { src: constructionFinished2, alt: 'Image 2', colSize: 'col-4' },
          { src: constructionFinished3, alt: 'Image 3', colSize: 'col-4' },
          { src: constructionFinished4, alt: 'Image 4', colSize: 'col-4' },
          { src: constructionFinished5, alt: 'Image 5', colSize: 'col-4' },
          { src: constructionFinished6, alt: 'Image 6', colSize: 'col-4' },
          { src: constructionFinished7, alt: 'Image 7', colSize: 'col-4' },
          { src: constructionFinished8, alt: 'Image 8', colSize: 'col-4' },
          { src: constructionFinished9, alt: 'Image 9', colSize: 'col-4' },
          { src: constructionFinished10, alt: 'Image 10', colSize: 'col-4' },
        ]
      },
      {
        name: "CONSTRUCTION ONGOING",
        images: [
          { src: constructionOngoing1, alt: 'Image 1', colSize: 'col-4' },
          { src: constructionOngoing2, alt: 'Image 2', colSize: 'col-4' },
          { src: constructionOngoing3, alt: 'Image 3', colSize: 'col-4' },
          { src: constructionOngoing4, alt: 'Image 1', colSize: 'col-4' },
          // { src: constructionOngoing5, alt: 'Image 2', colSize: 'col-4' },
          { src: constructionOngoing6, alt: 'Image 3', colSize: 'col-4' },
          { src: constructionOngoing7, alt: 'Image 3', colSize: 'col-4' },

        ]
      },
      {
        name: "CONSTRUCTION YET TO START",
        images: [
          { src: constructionYetToStart1, alt: 'Image 1', colSize: 'col-4' },
          { src: constructionYetToStart2, alt: 'Image 2', colSize: 'col-4' },
          { src: constructionYetToStart3, alt: 'Image 3', colSize: 'col-4' },
          { src: constructionYetToStart4, alt: 'Image 3', colSize: 'col-4' },
          // Add remaining unique images
        ]
      },
    ]
  },
  {
    category: "INTERIORS",
    subcategories: [
      {
        name: "WOOD INTERIOR",
        images: [
          { src: woodInterior1, alt: 'Image 1', colSize: 'col-4' },
          { src: woodInterior2, alt: 'Image 2', colSize: 'col-3' },
          { src: woodInterior3, alt: 'Image 3', colSize: 'col-4' },
          { src: woodInterior4, alt: 'Image 4', colSize: 'col-4' },
          { src: woodInterior5, alt: 'Image 5', colSize: 'col-4' },
          { src: woodInterior6, alt: 'Image 6', colSize: 'col-3' },
          { src: woodInterior7, alt: 'Image 7', colSize: 'col-4' },
          { src: woodInterior8, alt: 'Image 8', colSize: 'col-4' },
          { src: woodInterior9, alt: 'Image 9', colSize: 'col-4' },
        ]
      },
      {
        name: "ALUMINIUM INTERIOR",
        images: [
          { src: aluminium1, alt: 'Image 1', colSize: 'col-4' },
          { src: aluminium2, alt: 'Image 2', colSize: 'col-4' },
          { src: aluminium3, alt: 'Image 3', colSize: 'col-4' },
          { src: aluminium4, alt: 'Image 1', colSize: 'col-4' },
          { src: aluminium5, alt: 'Image 2', colSize: 'col-4' },
          { src: aluminium6, alt: 'Image 3', colSize: 'col-4' },
          { src: aluminium7, alt: 'Image 3', colSize: 'col-4' },
          { src: aluminium8, alt: 'Image 3', colSize: 'col-4' },
          { src: aluminium9, alt: 'Image 3', colSize: 'col-4' },
          { src: aluminium10, alt: 'Image 3', colSize: 'col-4' },

        ]
      },
      {
        name: "LOUVERS",
        images: [
          { src: lovers1, alt: 'Image 1', colSize: 'col-4' },
          { src: lovers2, alt: 'Image 2', colSize: 'col-4' },
          { src: lovers3, alt: 'Image 3', colSize: 'col-4' },
          { src: lovers4, alt: 'Image 3', colSize: 'col-4' },
          { src: lovers5, alt: 'Image 1', colSize: 'col-4' },
          { src: lovers6, alt: 'Image 2', colSize: 'col-4' },
          { src: lovers7, alt: 'Image 3', colSize: 'col-4' },
          { src: lovers8, alt: 'Image 3', colSize: 'col-4' },
          { src: lovers9, alt: 'Image 3', colSize: 'col-4' },
          { src: lovers10, alt: 'Image 3', colSize: 'col-4' },
          // Add remaining unique images
        ]
      },
    ]
  },
  {
    category: "GLASS INSTALLATION",
    subcategories: [
      {
        name: "PERGOLA GLASS ROOFING",
        images: [
          { src: pergolaGlass1, alt: 'Image 1', colSize: 'col-4' },
          { src: pergolaGlass2, alt: 'Image 2', colSize: 'col-3' },
          { src: pergolaGlass3, alt: 'Image 3', colSize: 'col-4' },
          { src: pergolaGlass4, alt: 'Image 4', colSize: 'col-4' },
          { src: pergolaGlass5, alt: 'Image 5', colSize: 'col-4' },
          { src: pergolaGlass6, alt: 'Image 6', colSize: 'col-3' },
          { src: pergolaGlass7, alt: 'Image 7', colSize: 'col-4' },
          { src: pergolaGlass8, alt: 'Image 8', colSize: 'col-4' },
          { src: pergolaGlass9, alt: 'Image 9', colSize: 'col-4' },
          { src: pergolaGlass10, alt: 'Image 10', colSize: 'col-4' },
          { src: pergolaGlass11, alt: 'Image 10', colSize: 'col-4' },
        ]
      },
      {
        name: "STEP RAILING",
        images: [
          { src: steprailing1, alt: 'Image 1', colSize: 'col-4' },
          { src: steprailing2, alt: 'Image 2', colSize: 'col-4' },
          { src: steprailing3, alt: 'Image 3', colSize: 'col-4' },
          { src: steprailing4, alt: 'Image 1', colSize: 'col-4' },
          { src: steprailing5, alt: 'Image 2', colSize: 'col-4' },
          { src: steprailing6, alt: 'Image 3', colSize: 'col-4' },
          { src: steprailing7, alt: 'Image 3', colSize: 'col-4' },
          { src: steprailing8, alt: 'Image 3', colSize: 'col-4' },

        ]
      },
      {
        name: "BALCONY RAILING",
        images: [
          { src: balconyRailing1, alt: 'Image 1', colSize: 'col-4' },
          { src: balconyRailing2, alt: 'Image 2', colSize: 'col-4' },
          { src: balconyRailing3, alt: 'Image 3', colSize: 'col-4' },
          { src: balconyRailing4, alt: 'Image 3', colSize: 'col-4' },
          { src: balconyRailing5, alt: 'Image 1', colSize: 'col-4' },
          { src: balconyRailing6, alt: 'Image 2', colSize: 'col-4' },
          { src: balconyRailing7, alt: 'Image 3', colSize: 'col-4' },
          { src: balconyRailing8, alt: 'Image 3', colSize: 'col-4' },
          { src: balconyRailing9, alt: 'Image 3', colSize: 'col-4' },
          { src: balconyRailing10, alt: 'Image 3', colSize: 'col-4' },
          // Add remaining unique images
        ]
      },
      {
        name: "OFFICE GLASS PARTITION",
        images: [
          { src: officeglassPartition1, alt: 'Image 1', colSize: 'col-4' },
          { src: officeglassPartition2, alt: 'Image 1', colSize: 'col-4' },
          { src: officeglassPartition3, alt: 'Image 2', colSize: 'col-4' },
          { src: officeglassPartition4, alt: 'Image 2', colSize: 'col-4' },
          { src: officeglassPartition5, alt: 'Image 3', colSize: 'col-4' },
          { src: officeglassPartition6, alt: 'Image 3', colSize: 'col-4' },
          { src: officeglassPartition7, alt: 'Image 3', colSize: 'col-4' },
          { src: officeglassPartition8, alt: 'Image 3', colSize: 'col-4' },
          // Add remaining unique images
        ]
      },
      {
        name: "BATHROOM GLASS PATITION",
        images: [
          { src: bathroomglassPartition1, alt: 'Image 1', colSize: 'col-4' },
          { src: bathroomglassPartition2, alt: 'Image 2', colSize: 'col-4' },
          { src: bathroomglassPartition3, alt: 'Image 3', colSize: 'col-4' },
          { src: bathroomglassPartition4, alt: 'Image 3', colSize: 'col-4' },
          { src: bathroomglassPartition5, alt: 'Image 1', colSize: 'col-4' },
          { src: bathroomglassPartition6, alt: 'Image 2', colSize: 'col-4' },
          { src: bathroomglassPartition7, alt: 'Image 3', colSize: 'col-4' },
          { src: bathroomglassPartition8, alt: 'Image 3', colSize: 'col-4' },
          // Add remaining unique images
        ]
      },
    ]
  },
  {
    category: "CLADDING & GLAZING",
    subcategories: [
      {
        name: "ACP CLADDING",
        images: [
          { src: acp1, alt: 'Image 1', colSize: 'col-4' },
          { src: acp2, alt: 'Image 2', colSize: 'col-3' },
          { src: acp3, alt: 'Image 3', colSize: 'col-4' },
          { src: acp4, alt: 'Image 4', colSize: 'col-4' },
          { src: acp5, alt: 'Image 5', colSize: 'col-4' },
          { src: acp6, alt: 'Image 6', colSize: 'col-3' },
          // { src: acp7, alt: 'Image 7', colSize: 'col-4' },
          { src: acp8, alt: 'Image 8', colSize: 'col-4' },
          { src: acp9, alt: 'Image 9', colSize: 'col-4' },
          { src: acp10, alt: 'Image 9', colSize: 'col-4' },
          { src: acp11, alt: 'Image 9', colSize: 'col-4' },
        ]
      },
      {
        name: "STRUCTURAL GLAZING",
        images: [
          { src: glazing1, alt: 'Image 1', colSize: 'col-4' },
          { src: glazing2, alt: 'Image 2', colSize: 'col-4' },
          { src: glazing3, alt: 'Image 3', colSize: 'col-4' },
          { src: glazing4, alt: 'Image 3', colSize: 'col-4' },
          { src: glazing5, alt: 'Image 1', colSize: 'col-4' },
          { src: glazing6, alt: 'Image 2', colSize: 'col-4' },
          { src: glazing7, alt: 'Image 3', colSize: 'col-4' }
          // Add remaining unique images
        ]
      },
    ]
  },
];

const Gallery = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeSubcategoryIndex, setActiveSubcategoryIndex] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCategoryClick = (index) => {
    setActiveCategoryIndex(index);
    setActiveSubcategoryIndex(0); // Reset subcategory when category changes
  };

  const handleSubcategoryClick = (index) => {
    setActiveSubcategoryIndex(index);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsMaximized(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCategory = galleryData[activeCategoryIndex];
  const currentSubcategory = currentCategory.subcategories[activeSubcategoryIndex];
  const currentImages = currentSubcategory.images;

  return (
    <Fragment>
            <MetaData title={"Gallery | SVARG | Smart way to Build and Design your dream Home"} />
      <div className="gallery-container">
        {/* Category Tabs */}
        <div className="category-tabs">
          {galleryData.map((category, index) => (
            <button
              key={index}
              className={`tab-button glb-btn ${activeCategoryIndex === index ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Subcategory Tabs */}
        <div className="subcategory-tabs">
          {currentCategory.subcategories.map((subcategory, index) => (
            <button
              key={index}
              className={`tab-button glb-btn ${activeSubcategoryIndex === index ? 'active' : ''}`}
              onClick={() => handleSubcategoryClick(index)}
            >
              {subcategory.name}
            </button>
          ))}
        </div>


        {/* Gallery Images */}
        <div className="row">
          {currentImages.map((image, index) => (
            <div className={`col ${image.colSize}`} key={index}>
              <div
                className="image-container"
                onClick={() => handleImageClick(index)}
              >
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <div className="maximize-icon">⛶</div>
              </div>
            </div>
          ))}
        </div>

        {/* Maximize Overlay */}
        {isMaximized && (
          <div className="maximized-overlay">
            <div className="maximized-content">
              <img
                src={currentImages[currentImageIndex].src}
                alt={currentImages[currentImageIndex].alt}
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
    </Fragment>

  );
};

export default Gallery;
