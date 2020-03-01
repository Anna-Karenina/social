import { compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import React from 'react';

import { getUserProfile, getStatus,  updateStatus } from '../../redux/userPage-reducer';
import User from './User';
import WallContainer from './Wall/WallContainer';

class UserContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = this.props.authorizedUserId;
        if (!userId) { 
            this.props.history.push("/login");
        }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
}
    render(){
      return (
        <div>
          <User 
            {...this.props} 
            user = {this.props.user} 
            status = {this.props.status} 
            updateStatus= {this.props.updateStatus } />
          <WallContainer {...this.props} />
        </div>
      );
    }
  }

  let mapStateToProps = (state) => ({
         user: state.userPage.user,
         status: state.userPage.status,
         authorizedUserId: state.auth.id,
         isAuth: state.auth.isAuth
        });


export default compose(
  connect (mapStateToProps,
    {getUserProfile, getStatus, updateStatus } ),
  withRouter, 
)(UserContainer);
