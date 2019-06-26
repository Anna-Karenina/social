import React from 'react';

import cl from './Friends.module.css';


const Showfriends = (props) =>{
  return(
    <div className={cl.oneCard}>
      <div className={cl.imgWr}><img alt="" src={props.ava} /></div>
      <div>{props.name}</div>
    </div>
  );
}

const Friends = (props) =>{ //получаем массив jsx элементов
  let friendsElements = props.state
  .map( author => <Showfriends id={author.id} name={author.name} time={author.time} lstmessage={author.lstmessage}  ava={author.ava} /> );
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <div className={cl.title}>
          <h3>Мои контакты</h3>
        </div>
        <div className={cl.friendsList}>
          {friendsElements}
        </div>
      </div>
    </div>

  );
}


export default Friends;
