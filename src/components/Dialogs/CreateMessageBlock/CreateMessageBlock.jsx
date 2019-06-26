import React from 'react';

import {
  sendMessageCreator,
  updateNewMessegeBodyCreator,
} from '../../../redux/dialogsPage-reducer';
import cl from './CreateMessageBlock.module.css';


const CreateMessageBlock = (props) => {
   //создание компонента сообщение отвечающего за вывод
  let newMessageBody = props.dialogsPage.newMessageBody;

  let newMessageChange = (event) =>{
      let body = event.target.value;
      props.dispatch(updateNewMessegeBodyCreator(body));
  }

  let addMessage = () =>{
      props.dispatch(sendMessageCreator())
  }



  return(
    <div className = {cl.newMessageblock}>
      <hr />
      <div className={cl.textareawr}>
        <textarea value = {newMessageBody}
                  onChange = {newMessageChange}
                  placeholder="Ввидите сообщение ..."
                  cols="65" rows="6"
                  className = {cl.sendMessage}/>
      </div>
      <div className={cl.btnwr}>
        <button onClick={ addMessage }
          className={cl.sendMessageBtn}>
          отправить
        </button>
      </div>
    </div>
  );
}


export default CreateMessageBlock;
