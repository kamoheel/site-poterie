import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ( {allPosts} ) => {
  const [index, setIndex] = useState(0); 
  const length = allPosts.length;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric' }
    return new Date(dateString).toLocaleDateString('fr-FR', options)
}
    
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
           
          {allPosts.map((post)=> {
            return (
              <div>
              <div className="carousel-content">  
              {allPosts[index].imageUrl && ( 
                <img src={allPosts[index].imageUrl} alt={allPosts[index].title} className="carousel-image"/>
                )
              }
                <div className="carousel-text">
                  <p>{allPosts[index].title}</p>
                  <p>{allPosts[index].description}</p>
                </div>
              </div>  
              <div className="carousel-footer">
                <p>L'ATC, le {formatDate(allPosts[index].timestamps)}</p>
              </div>
            </div>
            )
          })}  
          
    </div>
  );

  
}

Carousel.propTypes = {
  allPosts: PropTypes.array.isRequired,
}
 
export default Carousel;