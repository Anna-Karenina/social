import React from 'react';

import cl from './Wall.module.css';
import Post from './Post/Post';



const Wall = (props) =>{

  let posted = props.postData
  .map(p => <Post id={p.id} name={p.name} ava={p.ava} like={p.like} repost={p.repost} message={p.message} />);

  let newPostElement = React.createRef(); //созаем новую ссылку

  let addPost = () =>{
      props.newPost();

  }

  let onPostUpdate = () => {
    let text= newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={cl.container} >

      <div className={cl.wall}>
        <span><h4>Мои записи</h4></span>
        <textarea  cols="1" rows="5"
                    placeholder="Опубликовать новость..."
                    ref = {newPostElement}
                    onChange= {onPostUpdate}
                    value={props.newPostText}
                     />
        <button onClick={ addPost }>Опубликовать</button>
      </div>
      {posted}   
    </div>
  );
}

export default Wall;
