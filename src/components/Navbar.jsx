import React from 'react';
import { navMenu } from '../data/navbar_data';

const Navbar = () => {
  return (
    <div className="flex h-[80px] w-[full] items-center justify-between bg-slate-300 px-[5rem]">
      <p>LOGO</p>
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
