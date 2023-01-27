import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="h-auto bg-hero-background bg-top bg-cover">
        <div className="z-20 bg-faded-black px-[8rem] py-[10rem] text-white">
          <div className="flex items-center justify-start gap-x-4">
            <p className="font-primary text-off-white text-[1.25rem]">
              Start donating now
            </p>
            <div className="h-[3px] w-[100px] bg-white"></div>
          </div>
          <h1 className="font-primary text-[7rem] mt-[2rem] font-bold leading-[7rem] text-off-white ">
            Let's become a <br /> helping hand
          </h1>
          <p className='font-primary text-off-white text-[1.25rem] leading-1 mt-[3rem]'>
            "The most important thing is that every child should be
            able to enjoy their childhood." <br /> - Nelson Mandela
          </p>
        <button className='font-secondary bg-primary hover:bg-secondary px-8 py-4 rounded-lg text-xl mt-[2.2rem]'>Learn more</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
