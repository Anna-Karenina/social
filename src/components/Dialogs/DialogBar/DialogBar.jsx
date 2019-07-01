import {NavLink} from "react-router-dom";
import React from 'react';

import cl from './DialogBar.module.css';


const DialogItem = (props) =>{ //создание шаблона вывода списка авторов сообщений
  let pathid = "/dialogs/" + props.id;
  return (
    <NavLink to = {pathid} >
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

const DialogBar = (props) =>{

  let dialogsElements = props.dialogAuthor
    .map( author => <DialogItem id={author.id} key={author.id} name={author.name} time={author.time} lstmessage={author.lstmessage}  ava={author.ava} /> );
      //Создание нового массива(на основании старого) компонентов списка вывода в окне выбора собеседника через метод массива .map
  return(
     <div className= {cl.contactWrapper}>
        <div className= {cl.contactListItems}>

          {dialogsElements}

        </div>
      </div>
    );
}


export default DialogBar;
