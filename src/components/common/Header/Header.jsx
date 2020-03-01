import {NavLink} from "react-router-dom";
import React from 'react';

import cl from './Header.module.css';

const Header = ({logout, login, isAuth}) =>{
  return (
    <header className={cl.header}>
    <img src="https://www.tagesjump.ru/media/catalog/product/cache/e5829842be8de77c96e9fa706c7fccbb/r/e/react-small.png" alt=""></img>

    <div className={cl.loginBlock}>
      {isAuth ?
      <>
       <span>{login}</span>
       <button onClick= {logout}>Выйти</button>
       </>
       :
        <NavLink to = "/login" >Войти</NavLink> }
        </div>
      </header>);
    }
    export default Header;
