import React from 'react'
import ReactCardFlip from "react-card-flip";
import Data from "../projects.json";
import '../styles/projects.css'



const Cards = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  // console.log(project);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className='jeden'
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div className='test'>
          <h3>{project.title}</h3>
          <img width="100" src={project.img} alt="" />
        </div>
      </div>
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target='_blank' rel="noreferrer">link</a>
        <img width="100" src={project.img} alt="" />
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
