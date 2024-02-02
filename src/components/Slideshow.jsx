import React from 'react';
import './Slideshow.css';

const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <div className="slides">
        <div className="slide">
          <img src="./src/assets/yugioh-logo.png" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="./src/assets/hearthstone-logo.png" alt="Slide 2" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
