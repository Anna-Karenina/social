
import React from 'react';


const User = () =>{
  return (
    <div className="content">
    <div><img alt="" src="https://s.rsg.sc/sc/images/react/logo/socialclub.png"></img>
      <div className="userProfile"><div className="userAvatar"><img alt="" src="https://www.matrony.ru/wp-content/uploads/2017/08/118551.jpg"></img></div>
      <div className="userInfo">
        <h3>Anna Karenina</h3>
        <p>date of birth</p>
        <p>City</p>
        <p>Enducatuion</p>
        <p>Web site</p>
        </div>
    </div>
    </div>
    <div className="wall">
      <h4>My post</h4>
      <input placeholder="your news..."></input>
      <button>Send</button>
    </div>
    <div className="commets">
        <p>Bullshit</p>
        <p>Rly!</p>
    </div>
  </div>
  );
}

export default User;
