import React from 'react';

import Profile from './ProfilePage/Profile';
import WallContainer from '../Wall/WallContainer';


const User = (props) =>{
  return (
    <div>
    <Profile />
    <WallContainer store = {props.store} />
  </div>
);
}

export default User;
