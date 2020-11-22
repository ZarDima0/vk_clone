import React from 'react';
import  Postcss from "./MyPost.module.css";
const MyPost = (props) => {
    return (
        <div className={Postcss.text}>
            <textarea name="Напиши" id="" cols="100" rows="5" placeholder="Напиши свой Пост">
            </textarea>
            <div className={Postcss.knopka}>
                <button type="submit" >Нажми на меня </button>
            </div>
        </div>
    )
}
export default MyPost;
