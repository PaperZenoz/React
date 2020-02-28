import React, {useState} from 'react';
import s from './ProfileItem.module.css';
import Preloader from './../../../../common/Preloader/Preloader'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from './../../../../assets/img/ava.jpg'
import ProfileDataForm from "./ProfileDataForm";



const ProfileItem = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelector = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0])

        }
    }

    const onSubmit = (formData) => {

         saveProfile(formData).then(
             () => {
                 setEditMode(false)

             }
         )


    }


    return (
        <div className={s.wrapper}>
            <img src={profile.photos.large || userPhoto} alt=""/>
            {isOwner && <input type="file" onChange={onMainPhotoSelector} />}


            {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileInfo profile={profile} isOwner={isOwner} goToEditMode={()=> setEditMode(true)}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );

}


const Contact = ({ContactTitle, ContactValue}) => {
    return (
        <div>
            <p><strong>{ContactTitle}:</strong> {ContactValue}</p>
        </div>
    )

}

const ProfileInfo = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}

            <p> Мой логин: {profile.fullName}</p>
            <p>Мои профессиональные навыки:{profile.lookingForAJobDescription}</p>
            <p>Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}</p>
            <p>Обо мне: {profile.aboutMe}</p>

            <p>Контакты:</p>
            <div className={s.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} ContactTitle={key} ContactValue={profile.contacts[key]}/>
                })}
            </div>

        </div>
    )
}



export default ProfileItem;






