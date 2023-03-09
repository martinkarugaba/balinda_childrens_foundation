import React from 'react';
import Line from './Line';
import love from '../assets/img/love.png';

const Introduction = () => (
  <>
    <section className="-mt-[10.75rem] bg-light-grey px-[8rem] pb-[15rem] pt-[15rem]">
      <img
        className="absolute left-0 h-[130px]"
        src={love}
        alt="love"
      />
      <div className="flex items-center justify-center">
        <p className="text-center font-primary text-xl font-bold leading-[30px] text-primary">
          A little introduction
        </p>
        <Line />
      </div>
      <h2 className="mt-6 text-center font-primary text-[3.125rem] font-bold leading-[60px] text-text-black">
        Welcome To The Balinda Children's
        {' '}
        <br />
        {' '}
        Foundation!
      </h2>
    </section>
  </>
);

export default Introduction;
