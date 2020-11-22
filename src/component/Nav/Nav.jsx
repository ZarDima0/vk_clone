import React from 'react';
import  navcss from "./nav.module.css";
import {NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <div className={navcss.backgroundblok}>
            <div className={navcss.navbar}>
                <ul>
                    <li><NavLink to="/content">Моя страница</NavLink></li>
                    <li><NavLink to="/News">Новости</NavLink></li>
                    <li><NavLink to="/Dialogs">Мессенджер</NavLink></li>
                    <li><NavLink to="/Friends">Друзья</NavLink></li>
                    <li><NavLink to="/Communities">Сообщества</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;