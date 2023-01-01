import React from 'react';
import './Participants.css'
import '../../main.css'
import ParticipantsTable from "./ParticipantsTable";

const Participants = () => {
    const userdata = [
        'Rojer Waters',
        'Charadeyouare@gmail.com',
        '0x279D9f0c10fBB3D44fEf96...'
    ]
    return (
        <div className='par-container'>
            <div>
                <div className='par-header'>BETA TEST REGISTRATION</div>
                <div className='par-description-text'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </div>
                <div className='par-form-container'>
                    <div className='par-form-text'>NAME</div>
                    <div className='par-form-userdata'>{userdata[0]}</div>
                    <div className='par-form-text'>EMAIL</div>
                    <div className='par-form-userdata'>{userdata[1]}</div>
                    <div className='par-form-button'>
                        <div className='main-button'>LIST ME TO THE ABLE</div>
                    </div>
                </div>
            </div>
            {/*<ParticipantsTable userdata={userdata}></ParticipantsTable>*/}
        </div>
    );
};

export default Participants;
