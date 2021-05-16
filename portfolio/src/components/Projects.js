import React, { useState } from 'react';

const Projects = () => {
    const projects = [{
        tile: 'konrad.stie',
        description: 'My first project made from scratch. '
    },
    {
        tile: 'Whack-a-Mole',
        description: 'asdasdasassasdasd afaf'
    },
    {
        tile: 'OrangeBlog',
        description: 'asdasdasdfghjasassasdasd afaf'
    },
    {
        tile: 'Paint Album',
        description: 'Online painting album for real person'
    },
    {
        tile: 'OrangeBlog',
        description: 'Abstract orange landing page'
    }]

    const [project, setProject] = useState(0);

    return (
        <div>
            <h1>PROJECTS COMPONENT</h1>
            <ul>
                {projects.map((item, index) =>
                 <li key={index} onClick={() =>  setProject(item)} >{item.tile}</li>)}
            </ul>

            {project ? (
                <div id='description'>
                    {project.description}
                </div>
            ) : (
                ""
            )}

        </div>

    )
}

export default Projects
