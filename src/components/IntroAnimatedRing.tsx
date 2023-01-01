import React from 'react';
import './IntroAnimatedRing.css'

const IntroAnimatedRing = () => {
    return (
        <div className='intro-anime-container'>
            <div className='intro-anime-point-1'>
                <div className='intro-anime-point-body'/>
            </div>
            <div className='intro-anime-point-2'>
                <div className='intro-anime-point-body'/>
            </div>
            <svg viewBox="0 0 444 444" className="intro-anime-box">
                <path className="intro-anime-ring"
                      stroke-dasharray="1388.58, 1388.58"
                      d="M222 1
                  a 221 221 0 0 1 0 442
                  a 221 221 0 0 1 0 -442"
                />
            </svg>
        </div>

    );
};

export default IntroAnimatedRing;
