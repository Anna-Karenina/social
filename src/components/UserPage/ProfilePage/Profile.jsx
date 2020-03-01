import React from 'react';

import Preloader from '../../common/preloader/Preloader';
import { ProfileStatus } from './ProfileStatus';
import cl from './Profile.module.css';


const Profile = (props) =>{
 if (!props.user){
   return <Preloader />
 }
  return (
    <div className={cl.userProfile}>
      <div className={cl.userAvatar}><img alt="" src={props.user.photos.large} />
      <button className={cl.bnt}>написать </button>
    </div>
    <div className={cl.userInfo}>
      <div>
      <h3>{props.user.fullName}</h3>
      <div className = {cl.status}> 
        <ProfileStatus  status = {props.status} updateStatus = {props.updateStatus}/> 
      </div>
      <p>Дата рождения:<span></span> </p>
      <p>Родной город:</p>
      <p>Текущее местоположение:</p>
      <p>Работа:  <span>{props.user.lookingForAJob}</span></p>
      <p>Обо Мне:  <span>{props.user.aboutMe}</span></p>
      <br />
      <hr />
      <h4>Контактная информация</h4>
      <p>Телефон</p>
      <p>Instagram <span>{props.user.contacts.instagram}</span></p>
      <p>FaceBook: <span>{props.user.contacts.facebook}</span></p>
      <p>Twitter: <span>{props.user.contacts.twitter}</span></p>
      <p>GitHub: <span>{props.user.contacts.github}</span></p>
      <p>ВК: <span>{props.user.contacts.vk}</span></p>
      <p>YouTube: <span>{props.user.contacts.youtube}</span></p>
    </div>
    </div>
  </div>
);
}

export default Profile;
