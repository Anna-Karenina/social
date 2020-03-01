import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import {  follow, unfollow, getFriendsThunkC, setCurentPage,  toggleFollowingProgress }
 from '../../redux/friendsPage-reducer';
import Friend from './Friend/Friend';
import Preloader from '../common/preloader/Preloader';

class FriendsContainer extends React.Component {
  componentDidMount(){
        this.props.getFriendsThunkC(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) =>{
              this.props.getFriendsThunkC(pageNumber, this.props.pageSize);
    }
  render() {
    return (<>
     {this.props.isFetching ? <Preloader /> : null}
            <Friend pageSize={this.props.pageSize}
                    totalFriednsCount={this.props.totalFriednsCount}
                    currentPage={this.props.currentPage}
                    onPageChanged= {this.onPageChanged}
                    friendsList= {this.props.friendsList}
                    follow= {this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress= {this.props.followingInProgress}
            />
          </>)
  }
}

let mapStateToProps = (state) => {
  return{
      friendsList : state.friendsPage.friendsList,
      pageSize : state.friendsPage.pageSize,
      totalFriednsCount : state.friendsPage.totalFriednsCount,
      currentPage: state.friendsPage.currentPage,
      isFetching: state.friendsPage.isFetching,
      followingInProgress: state.friendsPage.followingInProgress,
  }
}

export default compose(
  connect (mapStateToProps,{follow, unfollow, setCurentPage, toggleFollowingProgress, getFriendsThunkC })
)(FriendsContainer)
