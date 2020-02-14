import React from 'react';
import s from './Dialog.module.css'
import {addMessageCreator, onMessageChangeCreator} from '../../../../Redux/state'


const DialogTextArea = (props) => {
    let AddMessage = () => {
        props.dispatch(addMessageCreator());
    }


    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(onMessageChangeCreator(body))
    }


    let newMessageText = props.MessagesArr.newMessageText


    return (
        <div className={s.wrap}>
            <div className={s.addMessage}>
                <textarea className={s.textarea} onChange={onMessageChange} value={newMessageText}/>
                <button className={s.button} onClick={AddMessage}>Добавить</button>
            </div>
        </div>

    );
}


export default DialogTextArea;




