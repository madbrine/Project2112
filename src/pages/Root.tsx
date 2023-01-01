import React from 'react';
import Header from "../components/Header";
import Intro from "../components/Intro";
import Modal from "../components/Modal";
const Root = () => {
    return (
        <div>
            <Modal/>
            <Header/>
            <Intro/>
        </div>
    );
};

export default Root;
