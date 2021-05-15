import React, { useState } from 'react';

const Projects = () => {
    const projects = [{
        tile: 'konrad.stie',
        description: 'asdasdasdasd afaf'
    },
    {
        tile: 'asdasdasd.stie',
        description: 'asdasdasassasdasd afaf'
    },
    {
        tile: 'asdassasdasd.stie',
        description: 'asdasdasdfghjasassasdasd afaf'
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
