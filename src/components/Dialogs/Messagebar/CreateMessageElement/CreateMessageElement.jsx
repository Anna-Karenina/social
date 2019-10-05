import React from 'react';
import cl from './CreateMessageElement.module.css';

const OneMessage = (props) => { //создание компонента сообщение отвечающего за вывод
  return(
    <div className= {cl.dialog + ' ' + cl.interlocutorMessage}>
      <div className={cl.msgwrap}>
      {props.message}</div>
         </div>

  );
}

const CreateMessageElement = (props) =>{
  let messagesElements = props.dialogsPage.dialogMessages
  .map(m => <OneMessage message ={m.msg} id={m.id++} key={m.id} />);
  return (
        <div>{messagesElements}</div>
  );}

  export default CreateMessageElement;
