import React from 'react';
import { bannerData } from '../data/banner_data';

const Banner = () => {
  return (
    <div className="-mt-[6rem] flex h-auto w-[100%] items-center justify-center px-[7rem] text-off-white">
      {bannerData.map((item) => {
        const { id, icon, heading, title, backgroundColor } = item;
        return (
          <div
            key={id}
            className={`bg-${backgroundColor} flex-1 shadow-xl font-secondary rounded-lg cursor-pointer px-[3.5rem] py-[4rem]`}
          >
            <div className="text-lg">{icon}</div>
            <p className='font-semibold mt-4 text-base capitalize'>{heading}</p>
            <h3 className='font-primary font-bold mt-2 text-2xl capitalize'>{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
