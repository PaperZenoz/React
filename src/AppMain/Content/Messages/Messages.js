import React from 'react';
import s from './Content.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';



const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                <Profile />
                <Messages />

            </div>
        </div>
    );
}


export default Content;




