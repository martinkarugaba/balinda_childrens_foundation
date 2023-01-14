import React from 'react';
// Import Swiper styles
import Slider from './Swiper';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="z-0 w-[100vw]">
      <Navbar />
      <Slider />
    </div>
  );
};

export default Hero;
