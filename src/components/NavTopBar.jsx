import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import {
  FaFacebookF,
  FaTwitter,
  FaHome,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';

const NavTopBar = () => {
  return (
    <section className="flex items-center justify-between bg-primary px-[8rem] py-3 text-base font-normal text-white">
      {/* address */}
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex items-center justify-center gap-x-3">
          <FaPhone size={12} />
          <p>(+256) 123-456-123</p>
        </div>
        <div className="h-[15px] w-[1px] bg-off-white"></div>
        <div className="flex items-center justify-center gap-x-3">
          <FaEnvelope size={14} />
          <p>email@example.com</p>
        </div>
        <div className="h-[15px] w-[1px] bg-off-white"></div>
        <div className="flex items-center justify-center gap-x-3">
          <FaHome size={15} />
          <p>Dewi Street. 3456, Kampala, Uganda</p>
        </div>
      </div>
      {/* icons */}
      <div className="flex items-center justify-center gap-x-6">
        <FaFacebookF />
        <FaTwitter />
        <GrYoutube />
      </div>
    </section>
  );
};

export default NavTopBar;
