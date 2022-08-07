import React, { useState, useEffect } from 'react';
import './Work.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import ProjectCard from './ProjectCard/ProjectCard';
import vrImg from '../../assets/images/vr.png';
import travelImg from '../../assets/images/travel.png';
import notesImg from '../../assets/images/notes.png';
import foodImg from '../../assets/images/food.png';
import { FallingLines } from 'react-loader-spinner';

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
      <div className="work-page-container container">
        <div className="container work-page">
          <div className="text-zone heading">
            <h1>
              <AnimatedLetters
                lettersClass={lettersClass}
                strArray={nameArray}
                idx={15}
              />
            </h1>
          </div>
        </div>
        <div className="work">
          <ProjectCard
            title="Food Order"
            description="Website to order food"
            technologies="React, Redux, Tailwind css, Firebase"
            img={foodImg}
          />
          <ProjectCard
            title="Travel Website"
            description="Website for traveling"
            technologies="React, Bootstrap"
            img={travelImg}
          />

          <ProjectCard
            title="Notes Website"
            description="Website like google keep"
            technologies="React, Sass, Firebase"
            img={notesImg}
          />
          <ProjectCard
            title="VR Website"
            description="Landing page - VR website"
            technologies="React, Tailwind css"
            img={vrImg}
          />
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

export default Work;
