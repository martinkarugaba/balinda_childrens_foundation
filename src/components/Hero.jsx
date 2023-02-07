import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="h-auto bg-hero-background bg-cover bg-left">
        <div className="z-20 bg-faded-black px-[5rem] py-[10rem] pt-[5rem]">
          <div className="flex items-center justify-start gap-x-4">
            <p className="font-primary text-[1.25rem] text-off-white">
              Start donating now
            </p>
            <div className="h-[3px] w-[60px] bg-off-white"></div>
          </div>
          <h1 className="mt-[2rem] font-primary text-[7.75rem] font-bold leading-[7.125rem] tracking-[-7px] text-off-white drop-shadow-2xl ">
            Let's become{' '}
            <span className=''>
              {' '}
              <br /> a helping hand
            </span>
          </h1>
          <p className="mt-[2.5rem] font-primary text-xl leading-8 text-off-white">
            "The most important thing is that every child should be
            able to enjoy their childhood." <br /> - Nelson Mandela
          </p>
          <button className="mt-[2.2rem] rounded-lg bg-primary px-8 py-4 font-secondary text-xl font-normal text-off-white hover:bg-secondary">
            Learn more
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
