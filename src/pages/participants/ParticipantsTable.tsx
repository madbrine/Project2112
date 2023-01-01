import React from 'react';
import './ParticipantsTable.css'
import '../../main.css'

// const ParticipantsTable = (props) => {
const ParticipantsTable = () => {

    return (
        <div className='partab-container'>
            <div className='partab-header'>
                PARTICIPATION LISTING (ENABLE ONLY FOR PARTICIPANTS)
            </div>
            <div className='partab-list-header-container'>
                <div className='partab-list-header-name'>
                    NAME
                </div>
                <div className='partab-list-header-email'>
                    EMAIL
                </div>
                <div className='partab-list-header-wallet'>
                    WALLET
                </div>
            </div>
            <div className='partab-userdata-container'>
                <div className='partab-userdata-name'>
                    {/*{props.userdata[0]}*/}
                </div>
                <div className='partab-userdata-email'>
                    {/*{props.userdata[1]}*/}
                </div>
                <div className='partab-userdata-wallet'>
                    {/*{props.userdata[2]}*/}
                </div>
            </div>
        </div>
    );
};

export default ParticipantsTable;
