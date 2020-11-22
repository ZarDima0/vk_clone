import React from 'react';
import Contentssc from "./Content.module.css";
import MyPost from "./MyPost/MyPost.jsx"
import Post from "./MyPost/Post/post.jsx"
const Content = (props) => {
    
    return (
        <div className={Contentssc.background}>
            <div className={Contentssc.headerImg}>
                <img src="http://www.fonstola.ru/download.php?file=201311/1280x720/fonstola.ru-135996.jpg" alt="#" />
            </div>
            <div className={Contentssc.infoAva}>
                <div className={Contentssc.ava}>
                    <img src="https://avatars.mds.yandex.net/get-zen_doc/105853/pub_5cfe815283e84200af3e43e5_5cfe839285b5e500afe2eeb1/scale_1200" alt="#`" />
                </div>
                <div className={Contentssc.info}>
                    <ul>
                        <li>Имя Фамилия:Дима</li>
                        <li>Город:Барнаул</li>
                        <li>Дата рождения:10.03.2000</li>
                    </ul>
                </div>
            </div> 
            <MyPost />
            <Post message="Ghbdtn?" />
            <Post message="Hi how are you?"/>   
        </div>
    )
}
export default Content;