import React from 'react';

const ProjectsComponent = () => {
    return (
        <div className='projects'>
            <div className='container'>
                <div className='row'>
                    <div className='projects-header'>Projects</div>
                    <div className="projects-container">
                        <div className='project-1'>
                            COVID Tracer
                        </div>
                        <div className='project-2'>
                            StarGazers
                        </div>
                        <div className='project-3'>
                            BounceAround
                        </div>
                    </div>
                </div>
                <div className='scroll'>
                  <span>Scroll Down</span>
                </div>
            </div>
            <div className='fixed-misc'>
              Full Stack Developer
            </div>
        </div>
    );
}

export default ProjectsComponent;
