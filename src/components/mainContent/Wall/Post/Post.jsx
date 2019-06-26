import React from 'react';
import cl from './Post.module.css';

const Post = (props) =>{

  return (
  <div className={cl.container}>
    <div className={cl.comentator}>
        <div className={cl.author}> {props.name} </div>
        <div className={cl.imgwr}><img alt = "s" src={props.ava} /></div>
        <div className={cl.lovel}> <span>like{props.like} </span><span> rep{props.repost}</span></div>
    </div>
    <div className={cl.post}>
        <p>{props.message}</p>
    </div>
  </div>

);
}
export default Post;
