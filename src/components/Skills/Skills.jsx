import React, { useEffect, useState } from 'react';
import './Skills.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg';
import { ReactComponent as NextIcon } from '../../assets/svg/next.svg';
import { ReactComponent as ReduxIcon } from '../../assets/svg/redux.svg';
import { ReactComponent as BootstarpIcon } from '../../assets/svg/bootstrap.svg';
import { ReactComponent as SassIcon } from '../../assets/svg/sass.svg';
import { ReactComponent as TailwindIcon } from '../../assets/svg/tailwind.svg';
import { FallingLines } from 'react-loader-spinner';

const Skills = () => {
  const [lettersClass, setLettersClass] = useState('text-animate');

  const nameArray = [
    'S',
    'k',
    'i',
    'l',
    'l',
    's',
    ' ',
    '&',
    ' ',
    'E',
    'x',
    'p',
    'e',
    'r',
    'i',
    'e',
    'n',
    's',
    'e',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLettersClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersClass={lettersClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            Work in front-end development including technologies like
            <span className="tech-tag"> React js</span>,
            <span className="tech-tag"> Redux</span>,
            <span className="tech-tag"> JavaScript</span>,
            <span className="tech-tag"> Sass</span>,
            <span className="tech-tag"> Tailwind CSS</span>,
            <span className="tech-tag"> Bootstrap</span>,
            <span className="tech-tag"> CSS</span>,
            <span className="tech-tag"> HTML</span>,
            <span className="tech-tag"> Git</span>,
          </p>
          <p align="LEFT">
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
          <p>
            <span>Visit my </span>
            <a
              className="tech-tag"
              target="_blanck"
              href="https://www.linkedin.com/in/kerolesnabil/"
            >
              LinkedIn
            </a>
            <span> profile and my </span>
            <a
              className="tech-tag"
              target="_blanck"
              href="https://github.com/kerolesnabill"
            >
              GitHub
            </a>
            <span> profile for more details. </span>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <ReactIcon />
            </div>
            <div className="face2">
              <ReduxIcon />
            </div>
            <div className="face3">
              <NextIcon />
            </div>
            <div className="face4">
              <TailwindIcon />
            </div>
            <div className="face5">
              <BootstarpIcon />
            </div>
            <div className="face6">
              <SassIcon />
            </div>
          </div>
        </div>
      </div>
      <div class="loader-active">
        <FallingLines
          color="#ffa500"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    </>
  );
};

export default Skills;
