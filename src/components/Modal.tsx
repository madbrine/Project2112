import React, {useState} from 'react';
import './Modal.css'
import '../main.css'
import { useEthers } from '@usedapp/core';
const Modal = () => {
    const { activateBrowserWallet, account } = useEthers()
    const modal = (
        <div className='modal-container'>
            <div className='modal-box'>
                <div className='modal-header'>
                    Metamask extentions
                </div>
                <div className='modal-description'>
                    <div>To work with our application, you have to</div>
                    <div style={{display: 'flex'}}>
                        install the
                        <div style={{color: '#E75626', marginLeft: 5}}>
                            Metamask browser extension
                        </div>
                    </div>
                </div>
                <button className='main-button' onClick={()=> removeModal()}>
                    Skip this step
                </button>
            </div>
        </div>
    );
    const [returnState, setReturnState] = useState(modal)

    const removeModal = () => {
        setReturnState((<div></div>))
    }
    return (
        <div>
            {!account && returnState}
            {account && <></>}
        </div>
    )
};

export default Modal;
