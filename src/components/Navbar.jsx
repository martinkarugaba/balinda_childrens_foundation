import React from 'react';
import { navMenu } from '../data/navbar_data';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between z-50 h-[80px] bg-slate-300 px-[5rem]">
      <p className='font-medium leading-tight'>Balinda <br /> Chidren's <br /> Foundation</p>
      <div className="flex w-[500px] items-center justify-between">
        <ul className="flex w-[400px] items-center justify-between">
          {navMenu.map((item) => {
            const { id, title, src } = item;
            return (
              <li key={id}>
                <a href={src}>{title}</a>
              </li>
            );
          })}
        </ul>
        <button className="rounded-md border border-orange-500 px-4 py-[10px]">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Navbar;
