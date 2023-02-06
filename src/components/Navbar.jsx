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
        <div className="flex flex-col items-center justify-start leading-10">
          <p className="font-secondary text-base font-semibold leading-[1rem]">
            <span className="font-primary text-[2rem]">
              <span className=''>B</span>
              <span>a</span>
              <span className="text-secondary">l</span>
              <span>i</span>
              <span className="text-primary">n</span>
              <span className='text-text-black'>d</span>
              <span className="text-secondary">a</span>
            </span>{' '}
            <br />{' '}
            <span className="font-secondary font-normal">
              children's foundation
            </span>
          </p>
        </div>
        {/* nav-menu */}
        <div className="flex w-auto items-center justify-center gap-x-4 text-sm font-semibold">
          <ul className="flex w-auto items-center justify-center gap-x-2 text-base text-[#212121]">
            {navMenu.map((item) => {
              const { id, title, url } = item;
              return (
                <NavLink
                  key={id}
                  to={url}
                  className="cursor-pointer rounded-xl px-6 py-3 capitalize transition duration-300 ease-in hover:bg-primary hover:text-off-white"
                >
                  {title}
                </NavLink>
              );
            })}
          </ul>
        </div>
        <button className="cursor-pointer rounded-xl bg-secondary px-8 py-3 font-semibold text-white">
          Donate
        </button>
      </div>
    </section>
  );
};

export default Navbar;
