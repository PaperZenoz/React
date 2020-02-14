import React from 'react';
import s from './Humans.module.css'



let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.pagination}>
            {pages.map(pageNumber => {
                return <button
                    key={pageNumber}
                    onClick={() => {props.onPageChanged(pageNumber)}}
                    className={props.currentPage === pageNumber && s.selectedPage}
                >{pageNumber}
                </button>
            })}
        </div>

}

export default Paginator;

