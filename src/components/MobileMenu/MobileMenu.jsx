import React from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.scss';
import { navLinks } from '../../utils/constants';
import { useProductsContext } from '../../contexts/products_context';
import { useFiltersContext } from '../../contexts/filters_context';

const MobileMenu = () => {
  const { gender, closeSidebar, isSideBarOpen } = useProductsContext();
  const { getProductsByCategory } = useFiltersContext();

  const handelClick = category => {
    closeSidebar();
    getProductsByCategory(category);
  };

  return (
    <div
      className={`${
        isSideBarOpen ? 'mobile__menu show-menu ' : 'mobile__menu '
      }`}>
      <ul>
        {navLinks.map(({ id, link, url }) => (
          <li
            key={id}
            className='mobile__menu-link'
            onClick={() => handelClick(link)}>
            <Link to={`/${gender}/${url}`}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className='mobile__menu-close' onClick={closeSidebar}>
        <i className='fas fa-times' />
      </div>
    </div>
  );
};

export default MobileMenu;
