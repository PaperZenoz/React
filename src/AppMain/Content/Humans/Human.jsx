import React from 'react';
import s from './Humans.module.css'
import userPhoto from './../../../assets/img/ava.jpg'
import {NavLink} from 'react-router-dom'


let Human = ({human, followingInProgress, unfollow, follow}) => {

    return <div key={human.id} className={s.wrap}>
        <div className={s.left}>
            <NavLink to={'/profile/' + human.id}>
                <img src={human.photos.small != null ? human.photos.small : userPhoto} className={s.ava}/>
            </NavLink>
            <div className={s.button}>
                {human.followed
                    ? <button disabled={followingInProgress.some(id => id === human.id)} onClick={() => {
                        unfollow(human.id)
                    }
                    }>Отписаться</button>
                    : <button disabled={followingInProgress.some(id => id === human.id)} onClick={() => {
                        follow(human.id)
                    }}>Подписаться</button>}

            </div>
        </div>
        <div className={s.right}>
            <div className={s.name}>{human.name}</div>
            <div className={s.status}>{human.status}</div>
            {/*<div className={s.location}>{h.location.country}, {h.location.city}</div>*/}
        </div>


    </div>

}

export default Human;

