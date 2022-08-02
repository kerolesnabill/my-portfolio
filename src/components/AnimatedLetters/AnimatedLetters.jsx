import React from 'react';
import './AnimatedLetters.scss';

const AnimatedLetters = ({ lettersClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${lettersClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
