import React, { useState } from 'react';
import './NavMobile.scss';
import Logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faHome,
  faAddressCard,
  faLightbulb,
  faBriefcase,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const NavMobile = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="nav-mobile">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <FontAwesomeIcon
          onClick={clickHandler}
          className="btn"
          icon={faList}
          color="#fff"
        />
      </div>
      {click && (
        <div className="nav-container">
          <nav className="nav-links">
            <NavLink to="/" onClick={() => setClick(false)}>
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/about" onClick={() => setClick(false)}>
              <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/skills" onClick={() => setClick(false)}>
              <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/work" onClick={() => setClick(false)}>
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/contact" onClick={() => setClick(false)}>
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavMobile;
