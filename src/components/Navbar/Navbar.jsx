import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import logo from '../../assets/logo.png';
import bag from '../../assets/bag.png';

import { navLinks } from '../../utils/constants';
import { CartModel } from '..';
import { useProductsContext } from '../../contexts/products_context';
import { useCartContext } from '../../contexts/cart_context';
import { useFiltersContext } from '../../contexts/filters_context';

const Navbar = () => {
  const { updateGender, gender, openSidebar } = useProductsContext();
  const {
    getProductsByCategory,
    products_category: category,
    updateCategory,
  } = useFiltersContext();
  const { show_cart, showCart, cart } = useCartContext();

  const categoryProducts = category => {
    updateCategory(category);
    getProductsByCategory();
  };

  return (
    <>
      <nav className='nav'>
        <div className='nav__content-1'>
          <div className='nav__content-1-item-1'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>

          <div className='nav__content-1-item-2'>
            <form className='form'>
              <input type='text' placeholder='search' className='form-ipt' />
              <i className='fas fa-search' />
            </form>

            <select
              name='currency'
              id='currency'
              value='eur'
              className='select-ipt'>
              <option value='eur'>eur - $</option>
              <option value='gbp'>gbp - £</option>
              <option value='usd'>usd - $</option>
            </select>

            <Link to='/sign-up' className='user'>
              <i className='far fa-user' /> <span>login</span>
            </Link>

            <Link to='/favorite' className='heart'>
              <i className='fas fa-heart' />
            </Link>

            <Link to='/checkout/cart' className='cart' onMouseEnter={showCart}>
              <div className='cart__length'>{cart.length}</div>
              <img src={bag} alt='bag' />
            </Link>
          </div>
        </div>

        <div className='nav__links'>
          <ul className='nav__links-1'>
            {navLinks?.map(({ id, link, url }) => (
              <li
                key={id}
                className='nav__links-1-item'
                onClick={() => categoryProducts(link)}>
                <Link
                  to={`/${gender}/${url}`}
                  className={`${
                    link === category ? 'link link-active' : 'link'
                  }`}>
                  {link}
                </Link>
                {/* {dropDownLinks[gender][link] && (
                  <DropDownMenu>
                    <h4>{link}</h4>
                    {dropDownLinks[gender][link]?.map((item, idx) => (
                      <li
                        key={idx}
                        className='dropDown__item'
                        onClick={() => categoryProducts(link)}>
                        <Link
                          to={`/${gender}/${link}`}
                          name='product_type'
                          onClick={updateFilters}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </DropDownMenu>
                )} */}
              </li>
            ))}
          </ul>

          <div className='nav__links-2'>
            <Link
              to='/women'
              data-gender='women'
              className={`${gender === 'women' ? 'active' : ''}`}
              onClick={updateGender}>
              women
            </Link>
            <Link
              to='/men'
              data-gender='men'
              className={`${gender === 'men' ? 'active' : ''}`}
              onClick={updateGender}>
              men
            </Link>
          </div>

          <div className='mobile__menu-icon' onClick={openSidebar}>
            <i className='fas fa-bars' />
          </div>
        </div>
      </nav>

      {show_cart && <CartModel />}
    </>
  );
};

export default Navbar;

// <i class="fas fa-bars"></i>
// <i class="fas fa-times"></i>
