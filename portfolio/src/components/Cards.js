import React from 'react'
import ReactCardFlip from "react-card-flip";
import Data from "../data/projects.json";
import '../styles/projects.css'



const Cards = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  // console.log(project);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div className='test'>
          <h3>{project.title}</h3>
          <img className='thumbnail' src={project.img} alt="img" />
          <p>{project.type}</p>
        </div>
      </div>
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className='projectList'>
          <li>{project.tech}</li>
          <li>{project.tech2}</li>
          <li>{project.tech3}</li>
        </ul>
        <a className='projectLink' href={project.link} target='_blank' rel="noreferrer">visit project</a>
      </div>
    </ReactCardFlip>
  );
};

const Card = () => {
  return (
    <div className="Projects">
      {Data.map((item, index) => (
        <Cards project={item} key={`card-${index}`} />
      ))}
    </div>
  );
};
export default Card
