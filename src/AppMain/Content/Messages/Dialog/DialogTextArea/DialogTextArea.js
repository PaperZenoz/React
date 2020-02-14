import React from 'react';
import s from './DialogTextArea.module.css'
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../../../../utils/validators/validators";


const DialogTextArea = (props) => {


    let addNewMessage = (value) => {
        props.AddMessage(value.newMessageText)
    }

    return (
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    );
}

const maxLenght40 = maxLenghtCreator(10)


const AddMessageForm = (props) => {
    return (
        <form className={s.addMessage} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newMessageText"  placeholder="Введи сообщение" validate={[required, maxLenght40,]}/>
            <button>Добавить</button>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({form: "dialogTextArea"})(AddMessageForm)

export default DialogTextArea;




