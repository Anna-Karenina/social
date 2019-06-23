import React from 'react';

import CreateMessageBlock from '../CreateMessageBlock/CreateMessageBlock';
import cl from './Messagebar.module.css';


const Message = (props) => { //создание компонента сообщение отвечающего за вывод
  return(
    <div>
      {props.message}
  </div>
  );
}

const Messagebar = (props) =>{

  let messagesElements = props.dialogMessages
    .map(m => <Message message ={m.msg} />);

  return(
<div className= {cl.dialogPageWrapper}>
  <div className= {cl.findInDialog}>findInDialog<hr /></div>
  <div className= {cl.interlocutors}>

    <div className={cl.interlocutorsWrap}>
       <div className={cl.imgWr}><img alt="" src="https://www.startfilm.ru/images/base/film/05_01_13/big_97947_5663_d037_00240.jpg" /></div>
       <p>имя фамилия соб</p>

     </div>

     <div className={cl.userWrap}>
         <div className={cl.imgWr}><img alt="" src="https://www.startfilm.ru/images/base/film/05_01_13/big_97947_5663_d037_00240.jpg" /></div>
        <p>имя фамилия поль</p>
  </div>

  </div>


  <div className= {cl.dialoglist}>

    <div className= {cl.dialog + ' ' + cl.userMessage}>
      <div className={cl.msgwrap}>{messagesElements}</div>
    </div>
    <div className= {cl.dialog + ' ' + cl.interlocutorMessage}>
      <div className={cl.msgwrap}> {messagesElements} </div>
    </div>

 </div>

 <CreateMessageBlock />

</div>
  );
}

export default Messagebar;
