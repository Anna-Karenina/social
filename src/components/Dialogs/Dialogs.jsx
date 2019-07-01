import React from 'react';

import DialogBarContainer from './DialogBar/DialogBarContainer';
import Messagebar from './Messagebar/Messagebar';
import cl from './Dialogs.module.css';


const Dialogs = (props) =>{ //компонент вывода собиседников
  return (
    <div className={cl.container}>
      <DialogBarContainer />
      <Messagebar />
    </div>
  );
}


export default Dialogs;
