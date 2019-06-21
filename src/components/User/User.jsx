import React from 'react';
import cl from './User.module.css';


const User = () =>{
  return (

      <div className={cl.userProfile}><div className={cl.userAvatar}><img alt="" src="https://www.matrony.ru/wp-content/uploads/2017/08/118551.jpg"></img></div>
      <div className={cl.userInfo}>
        <h3>Anna Karenina</h3>
        <p>Дата рождения</p>
        <p>Родной город</p>
        <p>Образование</p>
        <p>Web site</p>
        </div>
    </div>
  );
}

export default User;
