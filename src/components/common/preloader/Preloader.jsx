import React from 'react';
import preloader from '../../../img/preloader.gif';
import cl from './Preloader.module.css';

let Preloader = (props) => {
  return <div className={cl.preloader}>
          <img src={preloader}  alt=""/>
        </div>
}

export default Preloader
