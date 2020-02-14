import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className={s.loginBlock}>
                {props.isAuth ? <div ><div className={s.log}>{props.login} </div> <button onClick={props.logout}> Log Out</button></div>
                    : <NavLink to={'/login'}>Логин</NavLink>
                }
            </div>
        </header>
    )
}


export default Header;