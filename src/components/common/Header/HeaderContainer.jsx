import { connect } from 'react-redux';
import React from 'react';

import { logout } from '../../../redux/auth-reducer';
import Header from './Header';


function HeaderContainer (props){
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});


export default connect(mapStateToProps, {logout}) (HeaderContainer);
