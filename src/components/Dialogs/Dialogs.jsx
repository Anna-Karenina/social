import React from 'react';

import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{ //создание шаблона вывода списка авторов сообщений
  let pathid = "/dialogs/" + props.id;
  return (
    <NavLink to ={pathid} >
      <div  className = {cl.item}>
        <div className={cl.ava}><img alt="who" src={props.ava}></img></div>
        <div className={cl.aboutDialog}>
          <span className = {cl.author}>{props.name}</span>
          <span className = {cl.timeMessage}>{props.time}</span>
          <span className = {cl.lstmsg}>{props.lstmessage}</span>
        </div>
      </div>
    </NavLink>
  );


}

const Message = (props) => { //создание компонента сообщение отвечающего за вывод
  return(
    <div>
      {props.message}
  </div>
  );
}

let dialogAuthor = [ //создание массива обьектов авторов
  {id: 1, name:'Шевцов Сергей', time: '11:59', lstmessage:'Туту вжух вжух когда ты будешь смелым, ловким, умелым, поедешь в джунгли, ведь они тебя зовут', ava:'http://www.giantmanagement.com/wp-content/uploads/2016/12/Featured-Image-3-650x813.jpg' },
  {id: 2, name:'Федоров Павел', time: '14:59', lstmessage:'Тата вжых вжых когда ты будешь кривым, косым , тупым, поедешь в джунгли, ведь они тебя зовут', ava:'http://www-static2.spulsecdn.net/pics/00/01/75/32/1753296_1_M.jpg' },
  {id: 3, name:'Ким ЧинЫр', time: '9:42', lstmessage : 'Туту вжух вжух когда ты будешь смелым, ловким, умелым, поедешь в джунгли, ведь они тебя зовут', ava:'https://www.advocate.com/sites/advocate.com/files/2015/03/04/christopher-khor-x400d.jpg' }
];
let dialogMessage = [ //создание массива обьектов сообщений в окне диалоге
  {id: 1, msg: ' got wings?!' },
  {id: 2, msg:'Yes?!' },
  {id: 3, msg:'And where they?!'}
];

let dialogsElements = [ //Создание массива компонентов списка вывода в окне выбора собеседника
  <DialogItem name={dialogAuthor[0].name}  time={dialogAuthor[0].time} lstmessage={dialogAuthor[0].lstmessage} id={dialogAuthor[0].id} ava={dialogAuthor[0].ava} />,
  <DialogItem name={dialogAuthor[1].name}  time={dialogAuthor[1].time} lstmessage={dialogAuthor[1].lstmessage} id={dialogAuthor[1].id} ava={dialogAuthor[1].ava} />,
  <DialogItem name={dialogAuthor[2].name}  time={dialogAuthor[2].time} lstmessage={dialogAuthor[2].lstmessage} id={dialogAuthor[2].id} ava={dialogAuthor[2].ava}/>
]

const Dialogs = (props) =>{ //компонент вывода собиседников
  return (

  <div className={cl.container}>
    <div className= {cl.contactWrapper}>
      <div className= {cl.contactListItems}>

        {dialogsElements}

      </div>
    </div>

    <div className= {cl.dialogWrapper}>
      <div className= {cl.findInDialog}>findInDialog<hr /></div>
      <div className= {cl.dialog}>
        <Message message ={dialogMessage[0].msg} />
        <Message message ={dialogMessage[1].msg} />
        <Message message ={dialogMessage[2].msg} />
     </div>
      <div className = {cl.textblock}>textblock</div>

  </div>
  </div>
);
}


export default Dialogs;
