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

  let friendsElements = props.state.state.dialogsPage.dialogAuthor
  .map( autho => <LlFriend id={autho.id} name={autho.name} time={autho.time} lstmessage={autho.lstmessage}  ava={autho.ava} /> );

return(
  <div className = {cl.wrap}>
  {friendsElements}
  </div>
)
}


export default ActiveElm;
