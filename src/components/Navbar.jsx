import React from 'react';
import { navMenu } from '../data/navbar_data';
import NavTopBar from './NavTopBar';

const Navbar = () => {
  return (
    <section>
      <NavTopBar />
      {/* navbar */}
      <div className="flex h-[80px] w-[100%] items-center justify-between bg-transparent px-[8rem] py-[3rem]">
        <p className="font-semibold leading-[1.1rem]">
          Balinda <br />
          <span>
            Chidren's Foundation
          </span>
        </p>
        {/* nav-menu */}
        <div className="flex w-auto items-center justify-center gap-x-4 justify-self-center text-sm font-semibold">
          <ul className="flex w-auto items-center justify-center gap-x-4">
            {navMenu.map((item) => {
              const { id, title, src } = item;
              return (
                <li
                  key={id}
                  className="cursor-pointer rounded-xl px-4 py-3 capitalize transition duration-300 ease-in hover:bg-primary hover:text-off-white"
                >
                  <a href={src}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="cursor-pointer rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white">
          Donate
        </button>
      </div>
    </section>
  );
};

export default Navbar;
