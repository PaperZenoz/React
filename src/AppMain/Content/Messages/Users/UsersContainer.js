import React from 'react';
import s from './Users.module.css';

import User from './User/User'


const Users = (props) => {

    let UsersPar = props.UserArr.map(u => <User id={u.id} name={u.name}/>)

    return (
        <div className={s.user}>
            {UsersPar}
        </div>

    );
}


export default Users;




