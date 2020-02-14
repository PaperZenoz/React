import React from 'react';
import Message from './Message/Message';
import s from './DialogMessage.module.css'


const DialogMessage = (props) => {


    let DialogElement = props.MessagesArr.DialogArr.map(d => <Message message={d.message} id={d.id}/>);


    return (
        <div className={s.wrap}>
            {DialogElement}
        </div>

    );
}


export default DialogMessage;




