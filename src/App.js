import './App.css';
import React from 'react';

import Header from './components/header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Post from './components/mainContent/Post/Post';
import User from './components/User/User';
import Wall from './components/mainContent/Wall/Wall.jsx';



const App = () =>{
  return (
    <div className='appWrapper'>
        <Header />
        <Nav />
        <div className = 'content'>

        <User />
        <Wall />
        <Post message='Тут будет находится текст поста, тот самый который оставил данный комментатор - чей аватар вы видите на экране' />
        <Post message='Тут будет находится текст поста, тот самый который оставил второй комментатор - чей аватар вы видите на экране' />
          <div className="line">
            <img alt="" src="http://www.asrepooya.com/fa/img/underconst.png"></img>  </div>
    </div>
  </div>
  );
}

export default App;
