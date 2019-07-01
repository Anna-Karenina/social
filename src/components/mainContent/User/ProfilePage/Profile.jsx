import React from 'react';
import cl from './Profile.module.css';


const Profile = (props) =>{

  return (
    <div className={cl.userProfile}>
      <div className={cl.userAvatar}><img alt="" src="https://www.startfilm.ru/images/base/film/05_01_13/big_97947_5663_d037_00240.jpg" />
      <button className={cl.bnt}>написать </button>
    </div>
    <div className={cl.userInfo}>
      <div>
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
  </div>
);
}

export default Profile;
