import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo.png';
import './Home.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';

const Home = () => {
  const [lettersClass, setLettersClass] = useState('text-animate');
  const nameArray = ['e', 'r', 'o', 'l', 'e', 's'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLettersClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={lettersClass}>H</span>
          <span className={`${lettersClass} _12`}>i,</span>
          <br />
          <span className={`${lettersClass} _13`}>I</span>
          <span className={`${lettersClass} _14`}>'m</span>
          <img className="letter-k" src={LogoTitle} alt="" />
          <AnimatedLetters
            lettersClass={lettersClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            lettersClass={lettersClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        <h2>Forntend Developer / React js Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
