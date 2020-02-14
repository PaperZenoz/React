import React from 'react';
import s from './AddPost.module.css';

import {addPostActionCreater, onPostChangeActionCreater} from '../../../../Redux/profile-reducer'


const AddPost = (props) => {


    let newPost = React.createRef()


    let AddPostCallBackScan = () => {
        props.dispatch(addPostActionCreater());
    }


    let onPostChange = () => {
        let text = newPost.current.value;
        let action = onPostChangeActionCreater(text)
        props.dispatch(action)
    }


    return (
        <div className={s.wrap}>
            <textarea ref={newPost} onChange={onPostChange} value={props.ProfileArr.newPostText}></textarea>
            <button onClick={AddPostCallBackScan}>Добавьте ваш пост
            </button>
        </div>

    );
}

export default AddPost;














