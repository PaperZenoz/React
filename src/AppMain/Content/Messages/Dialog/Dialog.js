import React from 'react';

import s from './Dialog.module.css'
import DialogTextAreaContainer from "./DialogTextArea/DialogTextAreaContainer";
import DialogMessageContainer from "./DialogMessage/DialogMessageContainer";


const Dialog = (props) => {


    return (
        <div className={s.wrap}>
            <DialogTextAreaContainer/>
            <DialogMessageContainer/>
        </div>

    );
}


export default Dialog;



