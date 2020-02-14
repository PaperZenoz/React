import React from 'react';
import s from './ProfileItem.module.css';
import Preloader from './../../../../common/Preloader/Preloader'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfileItem = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.wrapper}>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    );

}


export default ProfileItem;






