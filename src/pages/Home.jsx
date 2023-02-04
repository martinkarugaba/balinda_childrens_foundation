import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import WelcomeToBCF from '../components/WelcomeToBCF';
import Cards from '../components/Cards';
import LatestCauses from '../components/LatestCauses';

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <WelcomeToBCF />
      <Cards />
      <LatestCauses />  
    </>
  );
};

export default Home;
