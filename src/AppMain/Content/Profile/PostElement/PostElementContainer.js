import React from 'react';
import {connect} from 'react-redux'
import PostElement from "./PostElement";

let mapStateToProps = (state) => {
    return {
        PostArr: state.profilePage.PostArr
    }

}

const PostElementContainer = connect(mapStateToProps)(PostElement);


export default PostElementContainer;

