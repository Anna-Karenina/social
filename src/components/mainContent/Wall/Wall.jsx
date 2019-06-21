import React from 'react';

import Post from '../Post/Post';
import cl from './Wall.module.css';

const Wall = () =>{
  return (
    <div className={cl.container} >

      <div className={cl.wall}>
        <span><h4>Мои записи</h4></span>
        <textarea cols="1" rows="5" placeholder="Опубликовать новость..."></textarea>
        <button>Опубликовать</button>
      </div>
      <Post message='Тут будет находится текст поста, тот самый который оставил данный комментатор - чей аватар вы видите на экране' />
      <Post message='Тут будет находится текст поста, тот самый который оставил второй комментатор - чей аватар вы видите на экране' />

  </div>
);
}

export default Wall;
