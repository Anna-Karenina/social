import { connect } from 'react-redux';

import {
  sendMessageCreator,
} from '../../../../redux/dialogsPage-reducer';
import CreateMessageBlock from './CreateMessageBlock';



let mapStateToProps = (state) => {
  return{
    dialogsPage : state.dialogsPage
  }
}
let mapDispatchToprops = (dispatch) => {
    return{
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  }
}
const CreateMessageBlockContainer =
 connect(mapStateToProps, mapDispatchToprops) (CreateMessageBlock)

export default CreateMessageBlockContainer;
