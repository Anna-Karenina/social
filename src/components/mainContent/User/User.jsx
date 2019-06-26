import React from 'react';

import Wall from '../Wall/Wall';
import cl from './User.module.css';


const User = (props) =>{

  return (

    <div>
      <div className={cl.userProfile}>
        <div className={cl.userAvatar}><img alt="" src="https://www.startfilm.ru/images/base/film/05_01_13/big_97947_5663_d037_00240.jpg" />
        <button className={cl.bnt}>написать </button>
      </div>
      <div className={cl.userInfo}>
        <h3>Anna Karenina</h3>
        <p>Дата рождения</p>
        <p>Родной город</p>
        <p>Образование</p>
        <p>Web site</p>
        <br />
        <hr />
        <p>Контактная информация</p>
        <p>Телефон</p>
        <p>Instagram</p>
        <p>FaceBook</p>
        <p>Twitter</p>

      </div>
    </div>
    <Wall userPage={props.userPage}
          dispatch={props.dispatch} />
  </div>
);
}

export default User;
