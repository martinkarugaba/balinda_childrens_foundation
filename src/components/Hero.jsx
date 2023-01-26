import React from 'react';

const Hero = () => {
  return (
    <div className="z-[0] h-[100vh] bg-hero-background bg-cover before:absolute before:z-[10]  before:h-[100%] before:w-[100%] before:bg-faded-black">
      <div className="absolute z-[20] h-[100%] w-[100%] px-[8rem] py-[10rem] text-off-white">
        <div className="flex items-center justify-start gap-x-4">
          <p className="font-primary text-[1.25rem]">
            start donating now
          </p>
          <div className="h-[2px] w-[70px] bg-white"></div>
        </div>
        <h1 className="font-primary text-[7.5rem] text-slate-100 font-bold leading-[9rem]">
          Let's become a <br /> helping hand
        </h1>
        <p className="mt-[2.2rem] w-[70ch] font-primary text-[1.25rem]">
          "The most important thing is that every child should be able
          to enjoy their childhood." <br /> - Nelson Mandela
        </p>
        <button className='px-8 py-4 bg-primary hover:bg-secondary rounded-lg mt-[2.2rem] font-secondary text-xl'>Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
