import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/FriendsPage/Friends';
import HeaderContainer from './components/common/Header/HeaderContainer';
import Loginpage from './components/common/Login/Login';
import Music from './components/Music/Music';
import Nav from './components/common/Nav/Nav';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UserContainer from './components/UserPage/UserContainer';



const App = (props) =>{
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <HeaderContainer />
        <Nav state={props.state}/>
          <div className = 'content'>
            <Route path= '/Dialogs' render={ () => <DialogsContainer /> } />
            <Route path= '/User/:userId?'render= { () =>  <UserContainer/> } />
              <Route path= '/Music' render={ () => <Music/>} />
              <Route path= '/News' render={ () => <News/>} />
              <Route path= '/Settings' render={ () => <Settings />} />
              <Route path= '/Login' render={ () => <Loginpage />} />
              <Route path= '/Friends' render={ () => <Friends />} />
              </div>
      </div>
  </BrowserRouter>);
}

export default App;
