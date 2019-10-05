import React from 'react';

import cl from './CreateMessageBlock.module.css';


const CreateMessageBlock = (props) => {
  let newMessageBody = props.dialogsPage.newMessageBody;
  let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
  }
  let onAddMessage = () =>{
      props.sendMessage();
  }

  return(
    <div className = {cl.newMessageblock}>
      <hr />
      <div className = {cl.textareawr}>
        <textarea value = {newMessageBody}
                  onChange = {onNewMessageChange}
                  placeholder = "Ввидите сообщение ..."
                  cols = "65" rows = "6"
                  className = {cl.sendMessage}/>
      </div>
      <div className = {cl.btnwr}>
        <button onClick = { onAddMessage }
          className = {cl.sendMessageBtn}>
          отправить
        </button>
      </div>
    </div>
  );
}


export default CreateMessageBlock;
