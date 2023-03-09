import React from 'react';
import { Splide } from '@splidejs/react-splide';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Cards from '../components/Cards';
import LatestCauses from '../components/LatestCauses';

const Home = () => (
  <>
    <Hero />
    <Banner />
    <Introduction />
    <Cards />
    <LatestCauses />
  </>
);

export default Home;
