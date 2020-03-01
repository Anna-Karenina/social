import { profileApi } from '../api/api';

const NEW_POST = 'NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postData : [
    {id:1, name:'Классный Иван', ava: 'https://www.rp-assets.com/images/news/2018/06/27/45147-large.jpeg', like: 2, repost: 3, message: 'Тут будет находится текст поста, тот самый который оставил данный комментатор - чей аватар вы видите на экране'},
    {id:2, name:'Груздная Алксандра', ava: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg', like: 10, repost: 3, message: 'Шла Саша по шоссе и сосала ... сушку'},
  ],
  newPostText: '',
  user: null,
  status: ""
};

const userPageReducer = (state = initialState, action) =>{
  switch(action.type){

    case NEW_POST :
      let newbp = {
       id:3 ,
       name: 'sm',
       ava: 'none',
       like: 0,
       repost: 0,
       message: action.WallForm
    };
    return {
        ...state,
        postData : [...state.postData, newbp],
        newPostText : ''
    
      };
    case  SET_USER_PROFILE : {
      return  {...state, user : action.user}
  }
    case  SET_STATUS : {
      return  {...state, status : action.status}
  }
    default :
       return state;
    }
  }
export const newPostCreator = (WallForm) =>({ type: NEW_POST, WallForm })
const  setUserProfile = (user) => ({ type : SET_USER_PROFILE, user })
const  setStatusCreator = (status) => ({ type : SET_STATUS, status })
export const onPostUpdateCreator = (text) =>
  ({ type : UPDATE_NEW_POST_TEXT, newText : text })


export const getUserProfile = (userId) => (dispatch) =>{
  profileApi.getPropfile(userId)
    .then(response =>{
     dispatch(setUserProfile(response.data));
  });
}
export const getStatus = (userId) => (dispatch) =>{
  profileApi.getStatus(userId).then(response =>{
                    dispatch(setStatusCreator(response.data));
  });
}
export const updateStatus = (status) => (dispatch) =>{
  profileApi.updateStatus(status)
  .then(response =>{
   if(response.data.resultCode ===0){
     dispatch(setStatusCreator(status));
   }
  });
}

export default userPageReducer;
