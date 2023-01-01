import React from 'react';
import planet from '../assets/images/planet.webp'
import orange from '../assets/images/orange-circle.webp'
import './IntroTextPlanet.css'

const IntroTextPlanet = () => {
    return (
        <div>
            <div className='intro-textPlanet-planet-container'>
                <div style={{backgroundImage: `url(${planet}`}} className='intro-textPlanet-planet'>
                </div>
            </div>

            <div style={{backgroundImage: `url(${orange}`}} className='intro-textPlanet-text'>
                <div style={{height: 110}}>Explore Your own planet</div>
                <div>In our New metaverse</div>
            </div>
        </div>
    );
};

export default IntroTextPlanet;
