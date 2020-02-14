import React from 'react';
import s from'./Nav.module.css';

import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className={s.nav}>
            <li><NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink></li>
            <li><NavLink to="/messages" activeClassName={s.active}>Сообщения</NavLink></li>
            <li><NavLink to="/humans" activeClassName={s.active}>Люди</NavLink></li>
            <li><NavLink to="/music" activeClassName={s.active}>Музыка</NavLink></li>
            <li><NavLink to="/news" activeClassName={s.active}>Новости</NavLink></li>
            <li><NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink></li>
            <li><NavLink to="/login" activeClassName={s.active}>Логин</NavLink></li>

        </div>
    );
}


export default Nav;








