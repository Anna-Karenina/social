import React from 'react';

import Post from './Post/Post';
import cl from './Wall.module.css';


const Wall = (props) =>{

  let posted = props.postData
  .map(p => <Post id={p.id}
                  key={p.id}
                  name={p.name}
                  ava={p.ava} like={p.like}
                  repost={p.repost}
                  message={p.message} />);
  let newPostElement = React.createRef(); //созаем новую ссылку

  let onAddPost = () =>{
    props.addPost();
  }

  let onPostUpdate = () => {
    let text = newPostElement.current.value
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
        <button onClick={ onAddPost }>Опубликовать</button>
      </div>
      <div className={cl.wallPost}>
      {posted}
    </div>
    </div>
  );
}

export default Wall;
