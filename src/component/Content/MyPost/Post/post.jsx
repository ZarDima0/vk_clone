import React from 'react';
import  MyPost from "./post.module.css";
const Post = (props) => {
    return (
        <div className={MyPost.ava}>
            <img src="https://pbs.twimg.com/profile_images/431529196478038018/i_qx9taM.jpeg" alt="#"/>
            <div className={MyPost.textPost}>
                { props.message }
            </div>
            <br/>
            <div className={MyPost.Like}>
                <span>Like</span>
            </div> 
        </div>
    )
}
export default Post;
