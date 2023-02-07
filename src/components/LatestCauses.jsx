import React from 'react';
import { latestCauses } from '../data/latest_causes';
import Line from './Line';
import Goal from './Goal';

const LatestCauses = () => {
  return (
    <section className="-mt-[18rem] bg-off-white px-[8rem] py-[5rem] pt-[25rem]">
      <div className="flex items-center justify-center">
        <p className="font-primary text-xl text-primary">
          Donate now
        </p>
        <Line />
      </div>
      <h2 className="text-center font-primary  text-[3.125rem] font-bold tracking-normal text-text-black">
        Latest Causes
      </h2>
      <section className="mt-[2.5rem] flex items-center justify-between gap-x-6">
        {latestCauses.map((item) => {
          const { id, src, title, info, goal, btn } = item;
          return (
            <article
              key={id}
              className="border-1 h-auto flex-1 overflow-hidden rounded-xl border border-gray-200"
            >
              <div>
                <img src={src} alt="children happy" />
              </div>
              <div className="p-[2rem]">
                <h3 className="font-primary text-[1.8rem] font-bold leading-[43.5px] text-text-black">
                  {title}
                </h3>
                <p className="mt-[1rem] font-secondary text-lg font-medium text-text-grey">
                  {info}
                </p>
                <Goal goal={goal} />
              </div>
              <button className="w-[100%] font-secondary capitalize bg-secondary hover:bg-primary rounded-xl text-xl px-[1rem] py-[1rem] text-white">
                {btn}
              </button>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default LatestCauses;
