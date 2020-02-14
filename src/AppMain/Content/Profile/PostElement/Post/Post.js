import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.left}>
                <img className={s.ava}
                    src="https://yt3.ggpht.com/a/AGF-l7-wRk59WzEWnGVRsB86ukPZhl_QQ2wj9RctKg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="Ава"/>

                <div >
                    {props.like} likes
                </div>

            </div>
            <div className={s.right}>
                <strong>{props.name}</strong>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Post;














