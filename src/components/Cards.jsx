import React from 'react';
import { cardData } from '../data/card_data';

const Cards = () => {
  return (
    <>
      <section className='px-[8rem] flex justify-between items-center -mt-[10rem] gap-x-6'>
        {cardData.map((card) => {
          const { id, src, title, description } = card;
          return (
            <div key={id} className='flex-1 flex flex-col justify-start gap-y-6 items-start bg-off-white rounded-lg h-[450px] shadow-lg p-10'>
              <img className='h-[60px]' src={src} alt='heartbeat'/>
              <h3 className='font-primary text-2xl text-text-black'>{title}</h3>
              <p className='font-secondary font-medium text-lg text-text-grey'>{description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
