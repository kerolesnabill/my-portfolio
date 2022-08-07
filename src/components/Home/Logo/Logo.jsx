import React from 'react';
import './Logo.scss';
import LogoK from '../../../assets/images/logo.png';

const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <img className="solid-logo" src={LogoK} alt="" />
      </div>
      <div className="space"></div>
    </>
  );
};

export default Logo;
