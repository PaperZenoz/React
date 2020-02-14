import React from 'react';
import Paginator from "../../../common/Paginator/Paginator";
import Human from "./Human";


let Humans = ({currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, unfollow, follow, ...props}) => {


    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>

        {
            props.humans.map(h =>
                <Human human={h} id={h.id} followingInProgress={followingInProgress} unfollow={unfollow}
                       follow={follow}/>
            )}

    </div>

}

export default Humans;

