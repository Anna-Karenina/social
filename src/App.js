import './App.css';
import { Route, withRouter} from "react-router-dom";
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
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/preloader/Preloader';



class App extends React.Component {
  componentDidMount() {
    console.log(this)
  this.props.initializeApp();
}

render() {
    if (!this.props.initialized) {
      
        return <Preloader />
        
    }
    return(
      <div className='appWrapper'>
        <HeaderContainer />
        <Nav state={this.props.state}/>
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
  );
 }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);  
