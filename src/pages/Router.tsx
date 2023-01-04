import React, {useState} from 'react';
import {Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Registration from "./registration/Registration";
import Participants from "./participants/Participants";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Project2112" element={<Registration/>}/>
                <Route path="/Project2112/participants" element={<Participants/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
