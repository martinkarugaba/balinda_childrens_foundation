import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Cards from '../components/Cards';
import LatestCauses from '../components/LatestCauses';

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Introduction />
      <Cards />
      <LatestCauses />
    </>
  );
};

export default Home;
