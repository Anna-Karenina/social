import { compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import React from 'react';

import { getUserProfile } from '../../redux/userPage-reducer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import User from './User';
import WallContainer from './Wall/WallContainer';

class UserContainer extends React.Component{
  componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
          userId = 1222;
        }
        this.props.getUserProfile(userId);
      }
    render(){
      return (
        <div>
          <User {...this.props} user = {this.props.user} />
          <WallContainer {...this.props} />
        </div>
      );
    }
  }

  let mapStateToProps = (state) => ({
         user: state.userPage.user,
        });


export default compose(
  connect (mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(UserContainer);
