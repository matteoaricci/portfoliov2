import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'

const ContactComponent = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='contact-header'>Find and COntact Me Here</div>
                    <div className="contacts">
                    <div>Email</div>
                    <div>LinkedIn</div>
                    <div>Github</div>
                    <div>Medium</div>
                    <div>Instagram</div>
                    </div>
                </div>
                <div className='scroll'>
                  <span>Not Sure What To Put Here</span>
                </div>
            </div>
            <div className='fixed-misc'>
              Full Stack Developer
            </div>
        </div>
    );
}

export default ContactComponent;
