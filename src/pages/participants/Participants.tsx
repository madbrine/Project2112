import React, {useState} from 'react';
import './Participants.css'
import '../../main.css'
import ParticipantsTable from "./ParticipantsTable";
import {useLocation} from "react-router-dom";
import { useEthers } from '@usedapp/core';

const Participants = () => {
    const { account } = useEthers()
    const shortenAddress = (addr: any) => `${addr.slice(0, 24)}...`;
    const location = useLocation()
    const userData = [
        location.state.name,
        location.state.email,
        shortenAddress(account)
    ]
    const [listState, setListState] = useState(false)
    const listToTable = () => {
        setListState(true)
    }
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
                    <div className='par-form-userdata'>{location.state.name}</div>
                    <div className='par-form-text'>EMAIL</div>
                    <div className='par-form-userdata'>{location.state.email}</div>
                    <button className='main-button' onClick={listToTable}>LIST ME TO THE TABLE</button>
                </div>
            </div>
            <ParticipantsTable userdata={userData} listState={listState} setListState={setListState}></ParticipantsTable>
        </div>
    );
};

export default Participants;
