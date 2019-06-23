import React from 'react';
import {NavLink} from "react-router-dom";
import cl from './Nav.module.css';


const Nav = () =>{
  return (
    <div className={cl.container}>
    <nav className={cl.nav}>
      <div className={cl.menulist}>
      <NavLink to="#s" activeClassName = {cl.active} ><button>Поиск</button></NavLink>
      <br></br><hr></hr>

       <NavLink to="/User" activeClassName = {cl.active} ><button>Стена</button></NavLink>

      <NavLink to="/Dialogs" activeClassName = {cl.active} ><button>Сообщения </button></NavLink>
      <NavLink to="/News" activeClassName = {cl.active} ><button> Новости </button></NavLink>
      <NavLink to="/Music"activeClassName = {cl.active} ><button> Музыка</button></NavLink>
      <NavLink to="/Friends" activeClassName = {cl.active} ><button>Друзья </button></NavLink>
      <br></br><hr></hr>
      <NavLink to="/Settings" activeClassName = {cl.active} ><button>Пользователь </button></NavLink>
      </div>
    </nav>
  </div>
  );
}

export default Nav;
