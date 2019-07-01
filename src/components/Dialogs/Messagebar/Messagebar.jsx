import React from 'react';

import CreateMessageBlockContainer from
  './CreateMessageBlock/CreateMessageBlockContainer';
import CreateMessageElementContainer from
  './CreateMessageElement/CreateMessageElementContainer';
import cl from './Messagebar.module.css';

const Messagebar = (props) =>{
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
        <div className= {cl.overflow}>


        <CreateMessageElementContainer />

      </div>
      </div>
      <CreateMessageBlockContainer store = {props.store}/>
    </div>
  );
}
export default Messagebar;
