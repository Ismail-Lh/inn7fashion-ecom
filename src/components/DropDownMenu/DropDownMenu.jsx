import React from 'react';

import './DropDownMenu.scss';

const DropDownMenu = ({ children }) => {
  return (
    <div className='dropDown' id='dropDown'>
      {/* <div className='overlay' onMouseEnter={hideDropDownMenu} /> */}
      <div className='triangle' />
      <ul className='dropDown__list'>{children}</ul>
    </div>
  );
};

export default DropDownMenu;
