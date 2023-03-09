import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';

import img1 from '../assets/img/children-happy-in-line-min-cropped.jpg';
import img2 from '../assets/img/happy_children.jpeg';

const Splide = () => {
  return (
    <div>
      <Splide
        tag="section"
        className="h-[100vh]"
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src={img1} className="h-full w-full" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={img2} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Splide;
