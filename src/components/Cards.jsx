import React from 'react';
import { cardData } from '../data/card_data';

const Cards = () => {
  return (
    <>
      <section className="-mt-[10rem] flex items-center justify-between gap-x-[1.3rem] px-[8rem]">
        {cardData.map((card) => {
          const { id, src, title, description } = card;
          return (
            <div
              key={id}
              className="group flex h-[450px] flex-1 cursor-pointer flex-col items-start justify-start gap-y-6 rounded-xl bg-white p-[3.125rem] shadow-md"
            >
              <img className="h-[60px]" src={src} alt="heartbeat" />
              <h3 className="font-primary text-2xl font-bold text-text-black md:group-hover:text-primary md:transition md:duration-500 ease-in">
                <span>{title[0]}</span> <br /> <span>{title[1]}</span>
              </h3>
              <p className="font-secondary  text-lg font-medium text-text-grey">
                {description}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
