import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header.jsx';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav.jsx';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import User from './components/mainContent/User/User';



const App = () =>{
  return (
  <BrowserRouter>
      <div className='appWrapper'>
          <Header />
          <Nav />
            <div className = 'content'>
              <Route path= '/dialogs' component={Dialogs} />
              <Route path= '/user' component={User} />
              <Route path= '/Music' component={Music} />
              <Route path= '/News' component={News} />
              <Route path= '/Settings' component={Settings} />

            <div className="line"><img alt="" src="http://www.asrepooya.com/fa/img/underconst.png"></img>  </div>

      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
