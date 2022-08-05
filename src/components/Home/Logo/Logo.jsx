import React from 'react';
import './Logo.scss';
import LogoK from '../../../assets/images/logo.png';

const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <img className="solid-logo" src={LogoK} alt="" />
      </div>
      <div style={{ height: '70rem' }}></div>
    </>
  );
};

export default Logo;
