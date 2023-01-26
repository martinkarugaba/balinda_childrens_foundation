import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaHome } from 'react-icons/fa';
import {GrYoutube} from 'react-icons/gr'

const NavTopBar = () => {
  return (
    <>
      <div>
        <AiFillPhone />
        <p>(+256) 123-456-123</p>
      </div>
      <div>
        <MdEmail />
        <p>email@example.com</p>
      </div>
      <div>
        <FaHome />
        <p>Dewi Street. 3456, Kampala, Uganda</p>
      </div>
      <div>
        <FaFacebookF />
        <FaTwitter />
        <GrYoutube/>
      </div>
    </>
  );
};

export default NavTopBar;
