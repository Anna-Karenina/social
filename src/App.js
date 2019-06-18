import './App.css';

import React from 'react';

import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import User from './components/User';




const App = () =>{
  return (
    <div className='appWrapper'>
        <Header />
        <Nav />
        <User />
    </div>
  );
}

export default App;
