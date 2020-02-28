import React from 'react';
import AddPostConteainer from "./AddPost/AddPostContainer";
import PostElementContainer from "./PostElement/PostElementContainer";
import ProfileItem from './ProfileItem/ProfileItem'

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {


    return (
        <div>

            <ProfileItem profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} saveProfile={saveProfile}/>
            <AddPostConteainer />
            <PostElementContainer/>
        </div>
    );
}


export default Profile;




