import React from 'react';

import aero from '../assest/aeroplane.jpg';

import '../css/carousel.css';

const Carousel = () => {
  return (
    <div>
      <div>
        <img src={aero} alt="aeroplane" width="100%" height="500px" />
      </div>
      <div className="hero-txt">
        <h2>WE DELIVER WORLDWIDE.</h2>
        <h2>DELIVERY ON DEMAND.</h2>
      </div>
    </div>
  );
};

export default Carousel;