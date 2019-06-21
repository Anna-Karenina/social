import React from 'react';
import cl from './Wall.module.css';

const Wall = () =>{
  return (
    <div className={cl.container} >

      <div className={cl.wall}>
        <span><h4>Мои записи</h4></span>
        <textarea cols="1" rows="5" placeholder="Опубликовать новость..."></textarea>
        <button>Опубликовать</button>
      </div>
  </div>
);
}

export default Wall;
