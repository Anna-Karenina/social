const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT'
const SET_FETCHING = 'SET_FETCHING'

let initialState = {
  friendsList : [ ],
  pageSize: 5,
  totalFriednsCount: 0,
  currentPage: 1,
  isFetching:false
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
       default :
                return state;
  }
}
export const follow = (userId) =>({ type: FOLLOW, userId })
export const unfollow = (userId) =>({ type: UNFOLLOW, userId })
export const setFriends = (friendsList) =>({ type: SET_FRIENDS, friendsList })
export const setCurentPage = (currentPage) =>({ type: SET_CURENT_PAGE, currentPage: currentPage })
export const setTotalFriendCount = (totalFriednsCount) =>({ type: SET_TOTAL_FRIENDS_COUNT, count: totalFriednsCount })
export const setIsFetching = (isFetching) =>({ type: SET_FETCHING, isFetching})


export default friendsPageReducer;
