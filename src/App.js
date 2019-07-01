import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';

import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/FriendsPage/Friends';
import Header from './components/header/Header.jsx';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav.jsx';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import User from './components/mainContent/User/User';

const App = (props) =>{
  return <BrowserRouter>
    <div className='appWrapper'>
          <Header />
          <Nav state={props.state}/>
            <div className = 'content'>

              <Route path= '/Dialogs'
                render={ () => <Dialogs/> } />

              <Route path= '/User'
                 render= { () =>  <User/> } />

              <Route path= '/Music' render={ () => <Music/>} />
              <Route path= '/News' render={ () => <News/>} />
              <Route path= '/Settings' render={ () => <Settings />} />
              <Route path= '/Friends' render={ () =>
                  <Friends />} />


            </div>
    </div>
  </BrowserRouter>;
}

export default App;
