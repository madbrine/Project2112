import React, {useState} from 'react';
import './Registration.css'
import '../../main.css'
import planet from '../../assets/images/planet.webp'
import {Link} from "react-router-dom";

const Registration = () => {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const inputSender = () => {

    }
    return (
        <div className='reg-container'>
            <div className='reg-header'>BETA TEST REGISTRATION</div>
            <div className='reg-description-text'>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
            <div className='reg-form-container'>
                <div className='reg-form-text'>NAME</div>
                <input className='reg-form-input'
                       type="text"
                       name="name"
                       value={inputName}
                       onChange={(event) => setInputName(event.target.value)}
                />
                <div className='reg-form-text'>EMAIL</div>
                <input className='reg-form-input'
                       type="email"
                       name="email"
                       value={inputEmail}
                       onChange={(event) => setInputEmail(event.target.value)}
                />
                <div className='reg-form-button'>
                    <Link to='/Project2112/participants' state={{name: inputName, email: inputEmail}} style={{textDecoration: 'none'}} >
                        <button onClick={() => inputSender} className='main-button'>GET EARLY ACCESS</button>
                    </Link>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Registration;
