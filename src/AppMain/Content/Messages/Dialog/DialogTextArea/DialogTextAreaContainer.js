import React from 'react';
import {addMessageCreator} from '../../../../../Redux/messages-reducer'
import DialogTextArea from "./DialogTextArea";
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: (newMessageText) => {
            dispatch(addMessageCreator(newMessageText))
        }


    }

}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogTextArea)



