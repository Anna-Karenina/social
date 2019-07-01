import { connect } from 'react-redux';

import {
  onPostUpdateCreator,
  newPostCreator,
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
    addPost: () => {
      dispatch(newPostCreator());
    }
  }
}
const WallContainer = connect (mapStateToProps, mapDispatchToprops)(Wall);
export default WallContainer;
