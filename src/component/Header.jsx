import React from 'react';
import  classes from "./header.module.css";
 const Header = () => {
     return (
         <div className={classes.header}>
             <div className={classes.logoseach}>
                 <div className={classes.headerImg}>
                     <img src="https://alllogos.ru/images/logotip-playstation.png" alt="№" />
                 </div>
                 <div className={classes.formbutton}>
                     <form action="#">
                         <input className={classes.pole} type="text" placeholder="Поиск по сайту" />
                         <input className={classes.search} type="submit" value="Найти" />
                     </form>
                 </div>
             </div>
         </div>
     )
 }
export default Header;