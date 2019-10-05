import { UserAPI } from '../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT'
const SET_FETCHING = 'SET_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  friendsList : [ ],
  pageSize: 4,
  totalFriednsCount: 0,
  currentPage: 1,
  isFetching:true,
  followingInProgress: [ ]
};

const friendsPageReducer = (state = initialState, action) => {
  switch(action.type){
      case FOLLOW :
        return {
          ...state,
          friendsList: state.friendsList.map( u =>{
            if (u.id === action.userId){
                return {...u, followed: true}
            }
              return u;
          })
        }
      case UNFOLLOW :
      return {
        ...state,
        friendsList: state.friendsList.map( u =>{
          if (u.id === action.userId){
              return {...u, followed: false}
          }
            return u;
        })
      }
      case SET_FRIENDS:{
        return { ...state, friendsList: action.friendsList }
      }
      case SET_CURENT_PAGE:{
        return { ...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_FRIENDS_COUNT:{
        return { ...state, totalFriednsCount: action.count}
      }
      case SET_FETCHING:{
        return { ...state, isFetching: action.isFetching}
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS:{
        return { ...state,
          followingInProgress: action.isFetching
          ?[...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
        }
      }
       default :
                return state;
  }
}
export const followSucces = (userId) =>({ type: FOLLOW, userId })
export const unfollowSucces = (userId) =>({ type: UNFOLLOW, userId })
export const setFriends = (friendsList) =>({ type: SET_FRIENDS, friendsList })
export const setCurentPage = (currentPage) =>({ type: SET_CURENT_PAGE, currentPage: currentPage })
export const setTotalFriendCount = (totalFriednsCount) =>({ type: SET_TOTAL_FRIENDS_COUNT, count: totalFriednsCount })
export const setIsFetching = (isFetching) =>({ type: SET_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) =>({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getFriendsThunkC = (currentPage, pageSize) =>{
  return (dispatch) => {
    dispatch(setIsFetching(true));
    UserAPI.getFriends(currentPage, pageSize)
    .then(data =>{
      dispatch(setIsFetching(false));
      dispatch(setFriends(data.items));
      dispatch(setTotalFriendCount(data.totalCount));
    });
  }
}

export const follow = (userId) =>{
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    UserAPI.follow(userId)
    .then(response => {
                  if(response.data.resultCode === 0){
                    dispatch(followSucces(userId));
                  }
                  dispatch(toggleFollowingProgress(false, userId));
    });
  }
}
export const unfollow = (userId) =>{
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    UserAPI.unfollow(userId)
    .then(response => {
                  if(response.data.resultCode === 0){
                    dispatch(unfollowSucces(userId));
                  }
                  dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

export default friendsPageReducer;
