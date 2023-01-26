import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaHome } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';

const NavTopBar = () => {
  return (
    <section className="flex items-center justify-between px-[8rem] py-4 bg-primary">
      {/* address */}
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex justify-center items-center gap-x-3">
          <AiFillPhone />
          <p>(+256) 123-456-123</p>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <MdEmail />
          <p>email@example.com</p>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <FaHome />
          <p>Dewi Street. 3456, Kampala, Uganda</p>
        </div>
      </div>
      {/* icons */}
      <div className='flex justify-center items-center gap-x-6'>
        <FaFacebookF />
        <FaTwitter />
        <GrYoutube />
      </div>
    </section>
  );
};

export default NavTopBar;
