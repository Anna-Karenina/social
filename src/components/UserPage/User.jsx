import React from 'react';
import Profile from './ProfilePage/Profile';

const User = (props) =>{

  return (
    <div>
      <Profile user = {props.user}/>
    </div>
  );
}

export default User;
