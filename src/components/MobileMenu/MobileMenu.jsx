import React from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.scss';
import { navLinks } from '../../utils/constants';

const MobileMenu = ({ showMenu, closeMenu }) => {
  return (
    <>
      <ul
        className={`${
          showMenu
            ? 'mobile__menu animate__animated animate__fadeInUp'
            : 'mobile__menu animate__animated animate__fadeOutUp'
        }`}>
        {navLinks.map(({ id, link, url }) => (
          <li key={id} className='mobile__menu-link' onClick={closeMenu}>
            <Link to={`/${url}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
