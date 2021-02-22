import React from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import logo from '../../assets/logo.png';
import googlePlay from '../../assets/google-play.png';
import appStore from '../../assets/app-store.png';
import deviceApp from '../../assets/device.png';
import originalConcepts from '../../assets/original-concepts.png';
import cards from '../../assets/cards.png';

import { footerLinks } from '../../utils/constants';

import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className='footer'>
        <div className='footer__grid'>
          <div className='footer__grid-items footer__grid-item-1'>
            <img src={logo} alt='logo' />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque, impedit.
            </p>
            <div className='icons'>
              <i className='fab fa-facebook' />
              <i className='fab fa-instagram' />
            </div>
          </div>

          <div className='footer__grid-items footer__grid-item-2'>
            <h3>contact us</h3>
            <p>
              by phone <span>+972-036201022</span>
            </p>

            <p>
              by email <span>info@inn7fashion.com</span>
            </p>
          </div>

          {footerLinks.map(({ title, id, links }) => (
            <div
              className={`footer__grid-items footer__grid-item-${id}`}
              key={id}>
              <h3>{title}</h3>
              {links.map(({ id, link }) => (
                <ul key={id}>
                  <li key={id}>
                    <Link to='/' key={id}>
                      {link}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}

          <div className='footer__grid-items footer__grid-item-6'>
            <div>
              <h3>our app</h3>
              <ul>
                <li key={uuidv4()}>Discount on first purchase</li>
                <li key={uuidv4()}>Enjoy special offers</li>
                <li key={uuidv4()}>Single tap to see new arrivals</li>
              </ul>

              <img src={appStore} alt='app store' />
              <img src={googlePlay} alt='google play' />
            </div>
            <div>
              <img src={deviceApp} alt='device app' />
            </div>
          </div>
        </div>
      </div>

      <div className='footer__copyright'>
        <div className='footer__copyright-1'>
          <Link to='/'>
            <p>powered by</p>
            <img src={originalConcepts} alt='original Concepts' />
          </Link>
        </div>

        <div className='footer__copyright-2'>
          <img src={cards} alt='cards' />
        </div>

        <div className='footer__copyright-3'>
          <p>&copy; 2001- {year} INN7. all right reserved.</p>
          <p>
            Developed by{' '}
            <a href='https://twitter.com/lhbibe_ismail' target='_'>
              Ismail Lahbiyeb
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
