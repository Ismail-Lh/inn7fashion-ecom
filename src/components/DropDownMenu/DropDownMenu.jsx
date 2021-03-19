import React from 'react';

import './DropDownMenu.scss';

const DropDownMenu = ({ children }) => {
  return (
    <div className='dropDown'>
      <div className='overlay' />
      <div className='triangle' />
      <ul className='dropDown__list'>{children}</ul>
    </div>
  );
};

export default DropDownMenu;
