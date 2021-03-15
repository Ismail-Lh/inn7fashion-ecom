import React from 'react';

import './Button.scss';

const Button = ({ children, outline }) => {
  return (
    <button
      type='button'
      className={`${outline ? 'btn btn-outline' : 'btn btn-full'}`}>
      {children}
    </button>
  );
};

export default Button;
