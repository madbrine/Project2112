import React from 'react';
import './PersonalData.css'
import IntroAnimatedRing from "../../components/IntroAnimatedRing";
import planet from "../../assets/images/planet.webp";
import { useEthers } from '@usedapp/core';


const PersonalData = (props: any) => {
    const { account } = useEthers()
    return (
        <div className="personaldata-container">
            <button className='personaldata-button' onClick={()=>props.setPersonalDataState()}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_46_976)">
                    <rect x="2.11035" y="2.81799" width="1" height="10" rx="0.5" transform="rotate(-45 2.11035 2.81799)" fill="white"/>
                    <rect x="2.81738" y="9.88904" width="1" height="10" rx="0.5" transform="rotate(-135 2.81738 9.88904)" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_46_976">
                        <rect width="12" height="12" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            </button>
            <div className='personaldata-items'>
                <div className='personaldata-main'>Personal Data</div>
                <div className='personaldata-desc'>Name</div>
                <div className='personaldata-name'>{props.userdata[0]}</div>
                <div className='personaldata-desc'>Email</div>
                <div className='personaldata-name'>{props.userdata[1]}</div>
                <div className='personaldata-desc'>Wallet</div>
                <div className='personaldata-name'>{account}</div>
            </div>
            <div>
                <div className='personaldata-circles'>
                    <div className='circles-back'></div>
                    <div className='circles-in-1'></div>
                    <div className='circles-in-2'></div>
                    <div className='circles-out-blur'></div>
                    <div className='circles-out'></div>
                    <div className='IntroAnimatedRing'>
                        <IntroAnimatedRing/>
                    </div>
                    <div style={{backgroundImage: `url(${planet}`}} className='intro-textPlanet-planet'></div>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
