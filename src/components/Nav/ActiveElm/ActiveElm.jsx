import React from 'react';
import cl from './ActiveElm.module.css';


const LlFriend = (props) =>{
  return(
    <div className={cl.oneCard}>
      <div className={cl.imgWr}><img alt="" src={props.ava} /></div>
      <div>{props.name}</div>
    </div>
  );
}

const ActiveElm = (props)  =>{
  let friendsElements = props.dialogAuthor.map( autho => <LlFriend id={autho.id} key = {autho.id} name={autho.name} time={autho.time} lstmessage={autho.lstmessage}  ava={autho.ava} /> );

return(
  <div className = {cl.wrap}>
  {friendsElements}
  </div>
)
}


export default ActiveElm;
