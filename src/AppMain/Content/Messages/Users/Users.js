import React from 'react';
import s from'./Dialogs.module.css';

import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.user}>
                <ul>
                    <li><NavLink to="/messages/1" activeClassName={s.active}>Иванов Иван</NavLink></li>
                    <li><NavLink to="/messages/2" activeClassName={s.active}>Петр Петрович</NavLink></li>
                    <li><NavLink to="/messages/3" activeClassName={s.active}>Олег Юрьевич</NavLink></li>
                    <li><NavLink to="/messages/4" activeClassName={s.active}>Дядька Черномор</NavLink></li>
                    <li><NavLink to="/messages/5" activeClassName={s.active}>Василий Шустрый</NavLink></li>
                    <li><NavLink to="/messages/6" activeClassName={s.active}>Конь Буденый</NavLink></li>
                </ul>
        </div>

    );
}


export default Dialogs;




