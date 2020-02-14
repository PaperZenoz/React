import React from 'react';
import Post from './Post/Post';
import s from './PostElement.module.css'


const PostElement = React.memo(props => {
    let PostElement = props.PostArr.map(p => <Post text={p.text} name={p.name} key={p.id} like={p.like}/>);


    return (
        <div className={s.wrap}>
            {PostElement}
        </div>
    );
})


export default PostElement;

