import React from 'react';
import { navMenu } from '../data/navbar_data';
import NavTopBar from './NavTopBar';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/balinda_childrens_foundation_logo.svg';

const Navbar = () => {
  return (
    <section className="font-secondary">
      <NavTopBar />
      {/* navbar */}
      <div className="flex h-[80px] w-[100%] items-center justify-between bg-transparent px-[5rem] py-[3rem]">
        <div className="flex items-center justify-start border-secondary leading-10">
          <img
            src={logo}
            className="relative md:bottom-[2px] h-[55px]"
            alt="logo"
          />
          <div className="relative md:bottom-[0px] text-text-black">
            <p className="font-primary text-[2rem] font-medium tracking-[2px]">
              Balinda
            </p>
            <p className="-mt-[10px] font-secondary text-sm font-medium tracking-wider">
              children's foundation
            </p>
          </div>
        </div>
        {/* nav-menu */}
        <div className="flex w-auto items-center justify-center gap-x-0 text-sm font-semibold">
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
        <button className="cursor-pointer rounded-lg bg-primary px-8 py-3 font-semibold text-white ease-in md:transition md:duration-300 md:hover:scale-110">
          Donate
        </button>
      </div>
    </section>
  );
};

export default Navbar;
