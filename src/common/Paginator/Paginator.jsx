import React, {useState} from 'react';
import s from './Paginator.module.css'


let Paginator = ({totalUsersCount, pageSize,  currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={s.pagination}>

        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber (portionNumber - 1)}}>←</button>}


        {pages
            .filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionNumber)
            .map((pageNumber) => {
                return <button
                    key={pageNumber}
                    onClick={() => {
                        onPageChanged(pageNumber)
                    }}
                    className={currentPage === pageNumber && s.selectedPage}
                >{pageNumber}
                </button>
            })}






        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber (portionNumber + 1)}}>→</button>}

    </div>

}

export default Paginator;

