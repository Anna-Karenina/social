import React from 'react';
import cl from './CreateMessageBlock.module.css';


const CreateMessageBlock = (props) => { //создание компонента сообщение отвечающего за вывод

  let newSendMessage = React.createRef();

  let addMessage = () =>{

      let text = newSendMessage.current.value;
        alert('Сообщение : ' + text + ' доставленно, правда куда, хуй его знает');
  }



  return(
  <div className = {cl.newMessageblock}>
    <hr />
    <div className={cl.textareawr}>
      <textarea ref = {newSendMessage} placeholder="Ввидите сообщение ..." cols="65" rows="6" className = {cl.sendMessage}/>
    </div>
    <div className={cl.btnwr}>  <button onClick={ addMessage }className={cl.sendMessageBtn}>отправить</button></div>
    </div>
  );
}


export default CreateMessageBlock;
