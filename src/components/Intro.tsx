import React from 'react';
import planet from '../assets/images/planet.webp'
import './Intro.css'
import Circles from './Circles'
import IntroTextPlanet from "./IntroTextPlanet";

const Intro = () => {
    return (
        <div className='intro-container'>
            <div>
                <Circles/>

                <IntroTextPlanet/>
                <div className='intro-description-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </div>
            </div>
            <div className="intro-stats-container">
                <div className="intro-stats-header">ROADMAP STATS</div>
                <div className="intro-stats-box">
                    <div className="intro-stats-table-numbers">12, 345</div>
                    <div className="intro-stats-table-text">LOREM IPSUM DOLOR</div>
                </div>
                <div className="intro-stats-box">
                    <div className="intro-stats-table-numbers">12, 345</div>
                    <div className="intro-stats-table-text">LOREM IPSUM DOLOR</div>
                </div>
                <div className="intro-stats-box-none">
                    <div className="intro-stats-table-numbers">12, 345</div>
                    <div className="intro-stats-table-text">LOREM IPSUM DOLOR</div>
                </div>
            </div>

        </div>
    );
};

export default Intro;
