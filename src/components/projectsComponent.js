import React from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const ProjectsComponent = () => {
    return (
        <div className='projects'>
            <div className='container'>
                <div className='row'>
                    <div className='projects-header'>Projects</div>
                    <div className="projects-container">
                        <section className='project-1'>
                            COVID Tracer
                        </section>
                        <section className='project-2'>
                            StarGazers
                        </section>
                        <section className='project-3'>
                            BounceAround
                        </section>
                    </div>
                </div>
            </div>
            <div className='fixed-misc'>
              Full Stack Developer
            </div>
        </div>
    );
}

export default ProjectsComponent;
