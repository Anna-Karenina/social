import React from 'react';
import Profile from './ProfilePage/Profile.jsx';

const User = (props) =>{
  return (
    <div>
      <Profile user = {props.user} status = {props.status} updateStatus = {props.updateStatus}/>
    </div>
  );
}

export default User;
