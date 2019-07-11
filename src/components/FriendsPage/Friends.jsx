import React from 'react';

import FriendsContainer from './FriendsContainer';
import cl from './Friends.module.css';



    const Friends = (props) =>{ //получаем массив jsx элементов
          return (
          <div className={cl.container}>
            <div className={cl.wrapper}>
              <div className={cl.title}>
                <h3>Мои контакты</h3>
              </div>
              <div className={cl.friendsList}>
                <FriendsContainer />
              </div>
            </div>
          </div>
        );
      }

      export default Friends;
