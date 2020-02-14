import React from 'react';
import AddPostConteainer from "./AddPost/AddPostContainer";
import PostElementContainer from "./PostElement/PostElementContainer";
import ProfileItem from './ProfileItem/ProfileItem'

const Profile = ({profile, status, updateStatus}) => {


    return (
        <div>

            <ProfileItem profile={profile} status={status} updateStatus={updateStatus} />
            <AddPostConteainer />
            <PostElementContainer/>
        </div>
    );
}


export default Profile;




