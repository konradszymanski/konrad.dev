import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Data from '../data/projects.json';
import '../styles/projects.css';

export const ProjectCard = ({ project, detailsId }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    return (
        <article className="projectCard">
            <button
                type="button"
                className="cardToggle"
                aria-expanded={isFlipped}
                aria-controls={detailsId}
                onClick={() => setIsFlipped(previous => !previous)}
            >
                {isFlipped ? 'Hide' : 'Show'} details for {project.title}
            </button>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="test" aria-hidden={isFlipped}>
                    <h3>{project.title}</h3>
                    <img className="thumbnail" src={project.img} alt={project.title + ' preview'} />
                    <p>{project.type}</p>
                </div>
                <div className="CardBack" id={detailsId} aria-hidden={!isFlipped}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="projectList">
                        {[project.tech, project.tech2, project.tech3].filter(Boolean).map(tech => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                    {isFlipped && (
                        <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer">
                            Open {project.title}
                        </a>
                    )}
                </div>
            </ReactCardFlip>
        </article>
    );
};

const Cards = () => (
    <div className="Projects">
        {Data.map((project, index) => (
            <ProjectCard project={project} detailsId={`project-details-${index}`} key={project.title} />
        ))}
    </div>
);

export default Cards;
