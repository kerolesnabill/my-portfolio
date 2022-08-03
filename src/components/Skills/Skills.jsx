import React, { useEffect, useState } from 'react';
import './Skills.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg';
import { ReactComponent as NextIcon } from '../../assets/svg/next.svg';
import { ReactComponent as ReduxIcon } from '../../assets/svg/redux.svg';
import { ReactComponent as JSIcon } from '../../assets/svg/javascript.svg';
import { ReactComponent as BootstarpIcon } from '../../assets/svg/bootstrap.svg';
import { ReactComponent as SassIcon } from '../../assets/svg/sass.svg';
import { ReactComponent as TailwindIcon } from '../../assets/svg/tailwind.svg';
import { ReactComponent as HtmlIcon } from '../../assets/svg/html.svg';
import { ReactComponent as CssIcon } from '../../assets/svg/css.svg';
import { ReactComponent as GitIcon } from '../../assets/svg/git.svg';
import { ReactComponent as GitHubIcon } from '../../assets/svg/github.svg';

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
        </div>

        <div className="stage-icons-cont">
          <div className="icons-container">
            <div>
              <ReactIcon className="icon i-1" />
              <ReduxIcon className="icon i-2" />
              <NextIcon className="icon i-3" />
              <JSIcon className="icon i-4" />
              <SassIcon className="icon i-5" />
              <TailwindIcon className="icon i-6" />
              <BootstarpIcon className="icon i-7" />
              <CssIcon className="icon i-8" />
              <HtmlIcon className="icon i-9" />
              <GitIcon className="icon i-10" />
              <GitHubIcon className="icon i-11" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
