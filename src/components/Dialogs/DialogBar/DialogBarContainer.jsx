import { connect } from 'react-redux';

import DialogBar from './DialogBar';

const mapStateToProps = (state)  =>{
   return{
       dialogAuthor : state.dialogsPage.dialogAuthor
   }
}

const DialogBarContainer = connect (mapStateToProps)(DialogBar);
export default DialogBarContainer;
