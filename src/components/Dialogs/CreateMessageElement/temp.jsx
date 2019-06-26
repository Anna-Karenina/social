import React from 'react';
import cl from './CreateMessageElement.module.css';

const Message = (props) => { //создание компонента сообщение отвечающего за вывод
  return(
    <div>
      {props.message}
    </div>
  );
}


const CreateMessageElement = (props) =>{

  let messagesElements = props.dialogsPage.dialogMessages
  .map(m => <Message message ={m.msg} />);
return (
  <div className= {cl.dialog + ' ' + cl.interlocutorMessage}>
    <div className={cl.msgwrap}> {messagesElements} </div>
  </div>
  );}




export default CreateMessageElement;
