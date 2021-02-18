import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import logo from '../../assets/logo.png';
import bag from '../../assets/bag.png';

import { navLinks } from '../../utils/constants';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__content'>
        <div className='nav__content-item-1'>
          <Link to='/women'>women</Link>
          <Link to='/men' className='active'>
            men
          </Link>
        </div>

        <div className='nav__content-item-2'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>

        <div className='nav__content-item-3'>
          <form className='form'>
            <input type='text' placeholder='search' className='form-ipt' />
            <i class='fas fa-search' />
          </form>

          <select
            name='currency'
            id='currency'
            value='eur'
            className='select-ipt'>
            <option value='eur' selected>
              eur - $
            </option>
            <option value='gbp'>gbp - £</option>
            <option value='usd'>usd - $</option>
          </select>

          <Link to='/sign-up' className='user'>
            <i class='far fa-user' /> <span>login</span>
          </Link>

          <Link to='/favorite' className='heart'>
            <i class='fas fa-heart' />
          </Link>

          <Link to='/cart' className='cart'>
            <img src={bag} alt='bag' />
          </Link>
        </div>
      </div>

      <ul className='nav__links-list'>
        {navLinks.map(({ id, link, url }) => (
          <li key={id} className='nav__links-list-item'>
            <Link to={`/${url}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
