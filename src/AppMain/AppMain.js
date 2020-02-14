import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Content from './Content/Content';
import Nav from './Nav/Nav';
import s from './AppMain.module.css'


const AppMain = () => {
    return (
        <BrowserRouter>
            <div className={s.appMain}>
                <Nav/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}


export default AppMain;