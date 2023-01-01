import React from 'react';
import {Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Registration from "./registration/Registration";
import Participants from "./participants/Participants";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Registration/>}/>
                <Route path="/participants" element={<Participants/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;