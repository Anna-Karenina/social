import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';

import {
  follow,
  unfollow,
  setFriends,
  setCurentPage,
  setTotalFriendCount,
  setIsFetching,
} from '../../../redux/friendsPage-reducer';
import Friend from './Friend';
import Preloader from '../../common/preloader/Preloader';


class FriendContainer extends React.Component {
  componentDidMount(){
      this.props.setIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response =>{
                        this.props.setIsFetching(false);
                        this.props.setFriends(response.data.items);
                        this.props.setTotalFriendCount(response.data.totalCount);
      });
    }

    onPageChanged = (pageNumber) =>{
      this.props.setCurentPage(pageNumber)
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response =>{this.props.setFriends(response.data.items)
                        this.props.setIsFetching(false);
      });
    }

  render() {
    return <>
     {this.props.isFetching ? <Preloader /> : null}
            <Friend pageSize={this.props.pageSize}
                    totalFriednsCount={this.props.totalFriednsCount}
                    currentPage={this.props.currentPage}
                    onPageChanged= {this.onPageChanged}
                    friendsList= {this.props.friendsList}
                    follow= {this.props.follow}
                    unfollow={this.props.unfollow}
              />
          </>
  }
}


let mapStateToProps = (state) => {
  return{
      friendsList : state.friendsPage.friendsList,
      pageSize : state.friendsPage.pageSize,
      totalFriednsCount : state.friendsPage.totalFriednsCount,
      currentPage: state.friendsPage.currentPage,
      isFetching: state.friendsPage.isFetching
  }
}



const FriendsContainer = connect (mapStateToProps,
{
  follow, unfollow, setFriends, setCurentPage, setTotalFriendCount, setIsFetching
})(FriendContainer);
export default FriendsContainer;
