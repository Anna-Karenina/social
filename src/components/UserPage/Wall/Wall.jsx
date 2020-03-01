import React from 'react';

import Post from './Post/Post';
import WallForm from './WallForm';
import cl from './Wall.module.css';


const Wall = React.memo( props =>{
  let posted = props.postData
  .map(p => 
    <Post 
      id={p.id}
      key={p.id}
      name={p.name}
      ava={p.ava} like={p.like}
      repost={p.repost}
      message={p.message} />);

  let onAddPost = ({addPost, values}) =>{
    addPost(values.aWallForm);
  }

  return (
    <div className={cl.container} >
      <div className={cl.wall}>
        <span><h4>Мои записи</h4></span>
        <WallForm onSubmit={onAddPost} />
      </div>
      <div className={cl.wallPost}>
      {posted}
    </div>
    </div>
  );
} )

export default Wall;
