import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/balinda_childrens_foundation_logo.svg';
import { navMenu } from '../data/navbar_data';
import MobileMenu from './MobileMenu';

const Navbar = () => (
  <>
    <div className="flex h-[80px] w-[100%] items-center justify-between bg-off-white px-2 py-[3rem] md:px-[5rem]">
      <div className="flex items-center justify-start border-secondary leading-10">
        <img
          src={logo}
          className="relative h-[55px] md:bottom-[2px]"
          alt="logo"
        />
        <div className="relative text-text-black md:bottom-[0px]">
          <p className="font-primary text-[2rem] font-medium tracking-[2px]">
            Balinda
          </p>
          <p className="-mt-[10px] font-secondary text-sm font-medium tracking-wider">
            children's foundation
          </p>
        </div>
      </div>
      {/* desktop-menu */}
      <div className="hidden w-auto items-center justify-center gap-x-0 text-sm font-semibold md:flex">
        <ul className="flex w-auto items-center justify-center gap-x-4 text-base text-text-black">
          {navMenu.map((item) => {
            const { id, title, url } = item;
            return (
              <NavLink
                key={id}
                to={url}
                className="cursor-pointer rounded-xl px-4 py-3 capitalize transition duration-300 ease-in hover:bg-primary hover:text-off-white active:bg-primary"
              >
                {title}
              </NavLink>
            );
          })}
        </ul>
      </div>
      <MobileMenu />
      <button className="hidden cursor-pointer rounded-lg border-2 border-secondary bg-off-white px-8 py-3 text-lg font-semibold text-secondary ease-in md:inline md:transition md:duration-300 md:hover:scale-110 md:hover:border-0 md:hover:bg-secondary md:hover:text-off-white">
        Donate
      </button>
    </div>
  </>
);

export default Navbar;
