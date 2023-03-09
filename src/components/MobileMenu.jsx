import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { navMenu } from '../data/navbar_data';

const MobileMenu = (props) => (
  <section className="md:hidden">
    <p>
      <IoClose />
    </p>
    <ul className="absolute left-0 top-0 flex h-[100vh] w-[100%] flex-col items-center justify-center gap-x-4 bg-primary text-base text-text-black">
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
  </section>
);

export default MobileMenu;
