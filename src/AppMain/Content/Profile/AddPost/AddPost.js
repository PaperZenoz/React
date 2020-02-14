import React from 'react';
import s from './AddPost.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

const maxLenght40 = maxLenghtCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form className={s.wrap} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" validate={[required, maxLenght40]} placeholder="Сообщение"></Field>
            <button>Добавьте ваш пост</button>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)



const AddPost = (props) => {


    let onAddPostCallBackScan = (values) => {
        props.AddPostCallBackScan(values.newPostText);
    }


    return (
        <AddNewPostFormRedux onSubmit={onAddPostCallBackScan}/>
    );
}

export default AddPost;














