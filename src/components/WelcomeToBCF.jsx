import React from 'react';

const WelcomeToBCF = () => {
  return (
    <>
      <section className="-mt-[10.75rem] bg-light-grey px-[8rem] pb-[15rem] pt-[15rem]">
        <img className='absolute h-[130px] left-0' src="src/assets/img/love.png" alt="love" />
        <div className="flex items-center justify-center gap-x-4">
          <p className="text-center font-primary text-xl font-bold leading-[30px] text-primary">
            A little introduction
          </p>
          <div className="h-[20px] border-b-2 border-primary w-[30px] bg-transparent"></div>
        </div>
        <h2 className="mt-6 text-center font-primary text-[3.125rem] font-bold leading-[60px] text-text-black">
          Welcome To The Balinda Children's <br /> Foundation!
        </h2>
      </section>
    </>
  );
};

export default WelcomeToBCF;
