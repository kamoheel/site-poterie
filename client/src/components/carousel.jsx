import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ( {images, altText, text} ) => {
  const [index, setIndex] = useState(0); 
  const length = images.length;
    
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length -1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  }


  return ( 
    <div className="carousel">
      <button value="Previous Picture" onClick={handlePrevious} className={(length > 1) ? "arrow-left" : "hidden"} aria-label="Click for Previous Picture"><FontAwesomeIcon icon={faArrowLeft} className="fa"/></button>
      <button value="Next Picture" onClick={handleNext} className={(length > 1) ? "arrow-right" : "hidden"} aria-label="Click for Next Picture"><FontAwesomeIcon icon={faArrowRight} className="fa" /></button>         
      <img src={images[index]} alt={altText} className="carousel-image"/>
      <p>{text[index]}</p>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  altText: PropTypes.string.isRequired
}
 
export default Carousel;