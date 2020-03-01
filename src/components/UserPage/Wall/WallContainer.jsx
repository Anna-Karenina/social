import { connect } from 'react-redux';

import {
  newPostCreator,
  onPostUpdateCreator,
} from '../../../redux/userPage-reducer';
import Wall from './Wall';



const mapStateToProps = (state) =>{
  return{
  postData : state.userPage.postData,
  newPostText : state.userPage.newPostText
  }
}
const mapDispatchToprops = (dispatch) =>{
  return{
    updateNewPostText: (text) => {
        let action = onPostUpdateCreator(text);
        dispatch(action);
    },
    addPost: (aWallForm) => {
      dispatch(newPostCreator(aWallForm));
    }
  }
}
export default connect (mapStateToProps, mapDispatchToprops)(Wall);
