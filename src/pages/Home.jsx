import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import WelcomeToBCF from '../components/WelcomeToBCF';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <WelcomeToBCF />
      <Cards />
    </>
  );
};

export default Home;
