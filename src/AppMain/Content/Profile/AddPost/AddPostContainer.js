import React from 'react';

import {addPostActionCreater, onPostChangeActionCreater} from '../../../../Redux/profile-reducer'
import AddPost from "./AddPost";
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPostCallBackScan: (newPostText) => {

            dispatch(addPostActionCreater(newPostText));
        }


    }

}

const AddPostConteainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostConteainer;














