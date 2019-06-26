import React from 'react';

import { newPostCreator, onPostUpdateCreator } from '../../../redux/userPage-reducer';
import Post from './Post/Post';
import cl from './Wall.module.css';


const Wall = (props) =>{
debugger;
  let posted = props.userPage.postData
  .map(p => <Post id={p.id}
                  name={p.name}
                  ava={p.ava} like={p.like}
                  repost={p.repost}
                  message={p.message} />);

  let newPostElement = React.createRef(); //созаем новую ссылку

  let addPost = () =>{
    props.dispatch(newPostCreator());
  }

  let onPostUpdate = () => {
    let text = newPostElement.current.value
    let action = onPostUpdateCreator(text);
    props.dispatch(action);
  }
  return (
    <div className={cl.container} >

      <div className={cl.wall}>
        <span><h4>Мои записи</h4></span>
        <textarea  cols="1" rows="5"
                    placeholder="Опубликовать новость..."
                    ref = {newPostElement}
                    onChange= {onPostUpdate}
                    value={props.userPage.newPostText}
          />
        <button onClick={ addPost }>Опубликовать</button>
      </div>
      <div className={cl.wallPost}>
      {posted}
    </div>
    </div>
  );
}

export default Wall;
