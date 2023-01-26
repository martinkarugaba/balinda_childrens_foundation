import React from 'react';
import { navMenu } from '../data/navbar_data';
import NavTopBar from './NavTopBar';

const Navbar = () => {
  return (
    <section>
      <NavTopBar />
      <div className="flex h-[80px] w-[100%] items-center justify-between bg-transparent px-[8rem]">
        <p className="font-semibold leading-[1.1rem]">
          Balinda <br /> <span>Chidren's Foundation</span>
        </p>
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
    </section>
  );
};

export default Navbar;
