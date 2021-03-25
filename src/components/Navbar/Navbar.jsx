import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import logo from '../../assets/logo.png';
import bag from '../../assets/bag.png';

import { navLinks, dropDownLinks } from '../../utils/constants';
import { MobileMenu, CartModel, DropDownMenu } from '..';
import { useProductsContext } from '../../contexts/products_context';
import { useCartContext } from '../../contexts/cart_context';

const Navbar = () => {
  const { updateGender, gender } = useProductsContext();
  const { show_cart, showCart, cart } = useCartContext();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

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
            {navLinks.map(({ id, link, url }) => (
              <li key={id} className='nav__links-1-item'>
                <Link to={`/${gender}/${url}`} className='link'>
                  {link}
                </Link>
                {dropDownLinks[gender][link] && (
                  <DropDownMenu>
                    <h4>{link}</h4>
                    {dropDownLinks[gender][link].map((item, idx) => (
                      <li key={idx} className='dropDown__item'>
                        <Link to={`/${gender}/${link}/${item}`}>{item}</Link>
                      </li>
                    ))}
                  </DropDownMenu>
                )}
              </li>
            ))}
          </ul>

          <div className='nav__links-2'>
            <Link to='/women' data-gender='women' onClick={updateGender}>
              women
            </Link>
            <Link
              to='/men'
              data-gender='men'
              className='active'
              onClick={updateGender}>
              men
            </Link>
          </div>

          <div className='mobile__menu-icon' onClick={toggleMenu}>
            <i className={`${showMenu ? 'fas fa-times' : 'fas fa-bars'}`} />
          </div>
        </div>
      </nav>

      {showMenu && <MobileMenu showMenu={showMenu} closeMenu={closeMenu} />}
      {show_cart && <CartModel />}
    </>
  );
};

export default Navbar;

// <i class="fas fa-bars"></i>
// <i class="fas fa-times"></i>
