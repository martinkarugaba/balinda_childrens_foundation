import React from 'react';
import { navMenu } from '../data/navbar_data';

const Navbar = () => {
  return (
    <div className="h-[80px] flex justify-between items-center w-[full] bg-slate-300 px-[5rem]">
      <p>LOGO</p>
      <div className="flex justify-between items-center border border-red-700 w-[500px]">
        <ul className="flex justify-between items-center w-[400px] border border-red-700">
          {navMenu.map((item) => {
            const { title, src } = item;
            return (
              <li>
                <a href={src}>{title}</a>
              </li>
            );
          })}
        </ul>
        <button className="px-4 py-[10px] rounded-md border">Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
