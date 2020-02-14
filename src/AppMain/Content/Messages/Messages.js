import React from 'react';
import s from './Messages.module.css';

import Dialog from './Dialog/Dialog';
import UsersContainer from "./Users/UsersContainer";


const Messages = () => {


    return (
        <div className={s.wrapper}>
            <UsersContainer/>
            <Dialog/>
        </div>
    );
}


export default Messages;




