import React from 'react';
import  nav from "./nav.module.css";
const Nav = () => {
    return (
        <div className={nav.backgroundblok}>
            <div className={nav.navbar}>
                <ul>
                    <li><a href="">Моя страница</a>Моя страница</li>
                    <li><a href="">Новости</a></li>
                    <li><a href="">Мессенджер</a></li>
                    <li><a href="">Друзья</a></li>
                    <li><a href="">Сообщества</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;