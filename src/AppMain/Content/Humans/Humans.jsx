import React from 'react';
import s from './Humans.module.css'


let Humans = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(pageNumber => {

                return <span onClick={() => {
                    props.onPageChanged(pageNumber)
                }} className={props.currentPage === pageNumber && s.selectedPage}> {pageNumber}
                            </span>
            })}

        </div>


        {
            props.humans.map(h =>
                <div key={h.id} className={s.wrap}>
                    <div className={s.left}>
                        <img src={h.photos.small} className={s.ava}/>
                        <div className={s.button}>
                            {h.followed === true
                                ? <button onClick={() => {
                                    props.unfollow(h.id)
                                }}>Подписаться</button>
                                : <button onClick={() => {
                                    props.follow(h.id)
                                }}>Отписаться</button>}
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

