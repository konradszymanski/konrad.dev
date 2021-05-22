import React, { useState } from 'react';
import '../styles/projects.css'
import NextSection from './NextSection';

const Projects = () => {
    const projects = [{
        tile: 'Travel album/blog',
        description: 'My first project made from scratch.',
        link: 'https://konrad.site'
    },
    {
        tile: 'Whack-a-Mole',
        description: 'asdasdasassasdasd afaf',
        link: 'https://konrad-whack-a-mole.netlify.app'
    },
    {
        tile: 'OrangeBlog',
        description: 'asdasdasdfghjasassasdasd afaf',
        link: 'https://orangeblog.netlify.app'
    },
    {
        tile: 'Paint Album',
        description: 'Online painting album for real person',
        link: 'https://jadwigaszymanska.com'
    },
    {
        tile: 'Estate Agency app',
        description: 'Estate agency aplication'
    }]

    const [project, setProject] = useState(0);

    return (
        <section className='projects'>
            <h2>PROJECTS</h2>
            <ul>
                {projects.map((item, index) =>
                    <li key={index} onClick={() => setProject(item)} >{item.tile}</li>)}
            </ul>

            {project ? (
                <div id='description'>
                    {project.description}
                </div>
            ) : (
                ""
            )}
            <a href={project.link} target="_blank" rel="noreferrer" >{project.link}</a>
            <NextSection />
        </section>

    )
}

export default Projects
