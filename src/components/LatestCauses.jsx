import React from 'react';
import { latestCauses } from '../data/latest_causes';
import Line from './Line';
import Goal from './Goal';
import SingleCause from './SingleCause';

const LatestCauses = () => (
  <section className="bg-off-white px-[1.5rem] md:-mt-[18rem] md:px-[8rem] md:py-[5rem] md:pt-[25rem]">
    <div className="flex items-center justify-center">
      <p className="font-primary text-xl text-primary">Donate now</p>
      <Line />
    </div>
    <h2 className="text-center font-primary  text-[3.125rem] font-bold tracking-normal text-text-black">
      Latest Causes
    </h2>
    <SingleCause />
  </section>
);

export default LatestCauses;
