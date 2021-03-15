import React from 'react';

import './Button.scss';

const Button = ({ children, outline, handelClick }) => {
  return (
    <button
      type='button'
      className={`${outline ? 'btn btn-outline' : 'btn btn-full'}`}
      onClick={handelClick}>
      {children}
    </button>
  );
};

export default Button;
