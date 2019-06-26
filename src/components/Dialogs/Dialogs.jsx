import React from 'react';

import DialogBar from './DialogBar/DialogBar';
import Messagebar from './Messagebar/Messagebar';
import cl from './Dialogs.module.css';


const Dialogs = (props) =>{ //компонент вывода собиседников
  return (
    <div className={cl.container}>
      <DialogBar dialogAuthor={props.state.dialogAuthor}
                  dispatch={props.dispatch}/>
      <Messagebar dialogsPage = {props.state}
                  dispatch={props.dispatch}/>
    </div>
  );
}


export default Dialogs;
