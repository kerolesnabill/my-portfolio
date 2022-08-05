import React from 'react';
import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({
  title,
  description,
  technologies,
  img,
  liveURL,
  codeURL,
}) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="content">
        <div className="text-container">
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>Technologies</h3>
          <p>{technologies}</p>
        </div>
        <div className="btns-container">
          <a href={liveURL} target="_blanck" className="btn">
            <FontAwesomeIcon icon={faEye} color="#08570c" />
            View
          </a>
          <a href={codeURL} target="_blanck" className="btn">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
