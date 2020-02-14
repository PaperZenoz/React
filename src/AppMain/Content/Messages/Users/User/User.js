import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './User.module.css';


const User = (props) => {
    return (

        <div className={s.item}><NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink></div>
    );
}


export default User;

