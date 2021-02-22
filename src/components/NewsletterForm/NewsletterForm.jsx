import React from 'react';

import './NewsletterForm.scss';

const NewsletterForm = () => {
  return (
    <div className='newsletter'>
      <div className='newsletter__text'>
        <h1 className='newsletter__text-title'>INN7 NEWSLETTER SIGNUP</h1>
        <p className='newsletter__text-p-1'>
          Get 10% off your first order by signing up for the INN7fashion
          newsletter
        </p>
        <p className='newsletter__text-p-2'>
          *Please check your Junk/Spam E-mail folder just in case the code
          coupon email got delivered there instead of your inbox.
        </p>
      </div>

      <form className='newsletter__form'>
        <input type='text' placeholder='Email Address...' />
        <button type='submit'>SIGN IN</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
