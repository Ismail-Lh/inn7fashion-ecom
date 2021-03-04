import React from 'react';

import './Links.scss';

const Links = ({ children }) => {
  return (
    <div className='links'>
      {/* <Link to='/'>home /</Link>
      <Link to={`/${categories}`}>{categories} /</Link>
      <Link to={`/${designer}`}>{designer} /</Link>
      <p>{name}</p> */}
      {children}
    </div>
  );
};

export default Links;
