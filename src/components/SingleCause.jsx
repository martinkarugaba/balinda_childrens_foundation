import React from 'react';
import { useGlobalContext } from '../../context/context';

const SingleCause = () => {
  const { latestCauses } = useGlobalContext();

  return (
    <section className="mt-[2.5rem] flex items-center justify-between gap-x-6 border-2 border-green-500">
      {latestCauses.map((item) => {
        const { id, src, title, info, goal, btn, percent } = item;
        return (
          <article
            key={id}
            className="h-auto basis-full overflow-hidden rounded-xl border-2 border-orange-200 md:basis-1/3"
          >
            <div className="h-[351px]">
              <img
                src={src}
                className="h-[100%] w-[100%] object-cover"
                alt="children happy"
              />
            </div>
            <div className="p-[2rem]">
              <h3 className="font-primary text-[1.8rem] font-bold leading-[43.5px] text-text-black">
                {title}
              </h3>
              <p className="mt-[1.5rem] font-secondary text-lg font-medium text-text-grey">
                {info}
              </p>
              <Goal goal={goal} percent={percent} />
            </div>
            <button className="w-[100%] rounded-xl bg-secondary px-[1rem] py-[1rem] font-secondary text-xl capitalize text-white ease-in hover:bg-primary md:transition md:duration-300">
              {btn}
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default SingleCause;
