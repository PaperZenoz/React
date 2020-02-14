import React from 'react';
import s from './Humans.module.css'
import userPhoto from './../../../assets/img/ava.jpg'
import {NavLink} from 'react-router-dom'
import Paginator from "../../../common/Paginator/Paginator";


let Humans = ({currentPage , onPageChanged, totalUsersCount,  pageSize, ...props}) => {



    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>

        {
            props.humans.map(h =>
                <div key={h.id} className={s.wrap}>
                    <div className={s.left}>
                        <NavLink to={'/profile/' + h.id}>
                            <img src={h.photos.small != null ? h.photos.small : userPhoto} className={s.ava}/>
                        </NavLink>
                        <div className={s.button}>
                            {h.followed
                                ? <button disabled={props.followingInProgress.some(id => id === h.id)} onClick={() => {
                                    props.unfollow(h.id)
                                }
                                }>Отписаться</button>
                                : <button disabled={props.followingInProgress.some(id => id === h.id)} onClick={() => {
                                    props.follow(h.id)
                                }}>Подписаться</button>}

                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.name}>{h.name}</div>
                        <div className={s.status}>{h.status}</div>
                        {/*<div className={s.location}>{h.location.country}, {h.location.city}</div>*/}
                    </div>


                </div>
            )}

    </div>

}

export default Humans;

