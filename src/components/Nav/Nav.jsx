import React from 'react';
import cl from './Nav.module.css';


const Nav = () =>{
  return (
    <div className={cl.forStiky}>
      <div className={cl.logo}></div>
    <nav className={cl.nav}>
      <div className={cl.menulist}>
      <button> <a href="#s">Поиск</a> </button>
      <br></br><hr></hr>
      <button> <a href="#s">Стена</a> </button>
      <button> <a href="#s">Сообщения</a> </button>
      <button> <a href="#s">Новости</a> </button>
      <button> <a href="#s">Музыка</a> </button>
      <br></br><hr></hr>
      <button> <a href="#s">Пользователь</a> </button>
      </div>
    </nav>
  </div>
  );
}

export default Nav;
