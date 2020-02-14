import React from 'react';
import DialogMessage from "./DialogMessage";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {

    return {
        MessagesArr: state.messagesPage.DialogArr
    }

}

const DialogMessageContainer = connect(mapStateToProps)(DialogMessage);


export default DialogMessageContainer;




