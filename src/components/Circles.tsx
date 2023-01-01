import './Circles.css'
import React from "react";
import IntroAnimatedRing from "./IntroAnimatedRing";


const Circles = () => {
    return (
        <div className='circles-container'>
            <div className='circles-box'>
                <div className='circles-back'></div>
                <div className='circles-in-1'></div>
                <div className='circles-in-2'></div>
                <div className='circles-out-blur'></div>
                <div className='circles-out'></div>
                <div className='IntroAnimatedRing'>
                    <IntroAnimatedRing/>
                </div>
                <div className='circles-capsule'>
                    <div className='circles-capsule-text'>Q1 2022</div>
                    <div className='circles-capsule-circle'>
                        <div className='circles-capsule-circle-inner'></div>
                    </div>
                </div>
            </div>
            <div className='circle-introTextPlanet'>
            </div>
        </div>
    );
};

export default Circles;
