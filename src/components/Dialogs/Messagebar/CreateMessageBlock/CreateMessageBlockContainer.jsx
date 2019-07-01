import { connect } from 'react-redux';

import {
  sendMessageCreator,
  updateNewMessegeBodyCreator,
} from '../../../../redux/dialogsPage-reducer';
import CreateMessageBlock from './CreateMessageBlock';



let mapStateToProps = (state) => {
  return{
    dialogsPage : state.dialogsPage
  }
}
let mapDispatchToprops = (dispatch) => {
  return{
    updateNewMessageBody : (body) => {
      dispatch(updateNewMessegeBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}
const CreateMessageBlockContainer =
 connect(mapStateToProps, mapDispatchToprops) (CreateMessageBlock)

export default CreateMessageBlockContainer;
