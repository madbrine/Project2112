import React, {useState} from 'react';
import './Header.css'
import '../main.css'
import { useEthers } from '@usedapp/core';
const shortenAddress = (addr: any) => `${addr.slice(0, 18)}...`;

const Header = () => {
    const { activateBrowserWallet, account } = useEthers()
    return (
        <div className='header-container'>
            <div className='header-logo'>Logo</div>
            {!account && <button className='main-button' onClick={() => activateBrowserWallet()}>Connect metamask</button>}
            {account && <div className='header-account'>{shortenAddress(account)}</div>}
        </div>
    );
};

export default Header;
