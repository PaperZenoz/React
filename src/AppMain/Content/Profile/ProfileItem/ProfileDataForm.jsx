import React from 'react';
import {createField, Input, Textarea} from "../../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileItem.module.css';
import d from "./../../../../common/FormsControls/FormsControl.module.css"


const ProfileDataForm = ({handleSubmit, profile, error}) => {


    return (
        <form onSubmit={handleSubmit}>
            <button>Сохранить</button>
            {error && <div className={d.sumError}>
                {error}
            </div>}


            <p> Мой логин: </p>
            {createField("Моё имя", "fullName", [], Input, "text")}
            <p>Ищу работу: </p>
            {createField("", "lookingForAJob", [], Input, "checkbox")}
            <p>Мои профессиональные навыки:</p>
            {createField("Мои профессиональные навыки", "lookingForAJobDescription", [], Textarea, "textarea")}
            <p>Обо мне:</p>
            {createField("Обо мне", "aboutMe", [], Textarea, "textarea")}


            <p>Контакты:</p>
            <div className={s.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        {key} : {createField(key, "contacts." + key, [], Textarea, "textarea")}


                    </div>
                })}
            </div>

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'editprofile'

})(ProfileDataForm)

export default ProfileDataFormReduxForm
