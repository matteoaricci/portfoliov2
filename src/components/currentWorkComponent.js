import React from 'react';

const CurrentWorkComponent = () => {
    return (
        <div className='current-work'>
            <div className='container'>
                <div className='row'>
                    <div className='current-header'>Projects Being Developed</div>
                    <div className="current-container">
                        <div className='foxhole'>
                            Out of the foxhole
                        </div>
                        <div className='freelance'>
                            Teleband
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

export default CurrentWorkComponent;
