import React, { useState, useEffect } from 'react';
import './Work.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Work = () => {
  const [lettersClass, setLettersClass] = useState('text-animate');

  const nameArray = ['M', 'y', ' ', 'W', 'o', 'r', 'k'];

  useEffect(() => {
    setTimeout(() => {
      setLettersClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersClass={lettersClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <div className="work"></div>
    </>
  );
};

export default Work;
