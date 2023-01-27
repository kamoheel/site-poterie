import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ( {allPosts} ) => {
  const [current, setCurrent] = useState(0); 
  const length = allPosts.length;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString('fr-FR', options)
}
    
  const handlePrevious = () => {
    const newCurrent = current - 1;
    setCurrent(newCurrent < 0 ? length -1 : newCurrent);
  };

  const handleNext = () => {
    const newCurrent = current + 1;
    setCurrent(newCurrent >= length ? 0 : newCurrent);
  }

  return ( 
    
        <div className="carousel">
          <button value="Previous Picture" onClick={handlePrevious} className={(length > 1) ? "arrow-left" : "hidden"} aria-label="Click for Previous Picture"><FontAwesomeIcon icon={faArrowLeft} className="fa"/></button>
          <button value="Next Picture" onClick={handleNext} className={(length > 1) ? "arrow-right" : "hidden"} aria-label="Click for Next Picture"><FontAwesomeIcon icon={faArrowRight} className="fa" /></button>  
           {allPosts.map((post, index)=> {
            allPosts.sort(function(a, b) {
              if (a.timestamps < b.timestamps) {
                return 1;
              }
              if (a.timestamps > b.timestamps) {
                return -1;
              }
              return 0;
            });
                return (
          
              <div key={index} className={index === current ? 'carousel-container' : 'hidden'}>
                <div className="carousel-content">  
                  {post.imageUrl && ( 
                    <img src={post.imageUrl} alt={post.title} className="carousel-image"/>
                    )
                  }
                    <div className="carousel-text">
                      <p>{post.title}</p>
                      <p>{post.description}</p>
                      <p className="carousel-footer">Publié par l'ATC, le {formatDate(allPosts[index].timestamps)}</p>
                    </div>
                    {/* <div >
                    
                    </div> */}
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