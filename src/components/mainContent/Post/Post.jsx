import React from 'react';
import cl from './Post.module.css';

const Post = (props) =>{



  return (
  <div className={cl.container}>
    <div className={cl.comentautor}>
        <p>Иванов Иван</p>
        <div><img alt = "s" src ="https://www.rp-assets.com/images/news/2018/06/27/45147-large.jpeg"></img></div></div>
    <div className={cl.post}>
        <p>{props.message}</p>
    </div>
  </div>
);
}


export default Post;
